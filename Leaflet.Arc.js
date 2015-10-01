if (!L) {
    throw "Leaflet.js not included";
}  else if (!arc && !arc.GreatCircle) {
    throw "arc.js not included";
} else {
    L.Polyline.Arc = function (from, to, options) {
        from = L.latLng(from);
        to = L.latLng(to);

        var vertices = 100;
        var arcOptions = {};
        if (options) {
            if (options.offset) {
                arcOptions.offset = options.offset;
                delete options.offset;
            }
            if (options.vertices) {
                vertices = options.vertices;
                delete options.vertices;
            }
        }

        var generator = new arc.GreatCircle(
            {x: from.lng, y: from.lat},
            {x: to.lng, y: to.lat}
        );

        var line = generator.Arc(vertices, arcOptions);
        var latLngs = [];
        line.geometries[0].coords.forEach(function (point) {
            latLngs.push(L.latLng([point[1], point[0]]));
        });
        return L.polyline(latLngs, options);
    };
}