function get(url, callback, failCallback) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200)
                callback(xmlhttp.responseText, url);
            else
                failCallback(url);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function initMap() {
    var map = L.map('map').setView([60, 100], 3);
    var osm = new L.TileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 1,
        maxZoom: 18,
        attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    });
    map.addLayer(osm);

    L.Polyline.Arc([43.11667, 131.90000], [55.7522200, 37.6155600]).addTo(map);
    // using polyline options
    L.Polyline.Arc([59.56667, 150.80000], [67.50000, 64.03333], {
        color: "red"
    }).addTo(map);
}

get("https://unpkg.com/leaflet-arc@1.0.2/README.md", function (text) {
    document.getElementById("readme").innerHTML = new showdown.Converter().makeHtml(text);
    initMap()
});
