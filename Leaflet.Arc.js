if (!L) {
    throw "Leaflet.js not included";
}  else if (!arc && !arc.GreatCircle) {
    throw "arc.js not included";
} else {
    L.Polyline.Arc = function (from, to, options) {
        from = L.latLng(from);
        to = L.latLng(to);

        var vertices = 10;
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
        
        var wrap = 0; // counts how many times arc is broken over 180 degree
        if (line.geometries[0] && line.geometries[0].coords[0])
            wrap = from.lng - line.geometries[0].coords[0][0];
        
        line.geometries.forEach(function(line) {
            line.coords.forEach(function (point) {
                latLngs.push(L.latLng(
                    [point[1], point[0] + wrap]
                ));
            });
            wrap += 360;
        });
        line.geometries[0].coords
        return L.polyline(latLngs, options);
    };
}
