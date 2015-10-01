# [Leaflet.Arc](https://github.com/MAD-GooZe/Leaflet.Arc)
> Leaflet.js plugin for drawing Great Circle arcs using arc.js

This plugin adds  L.Polyline.Arc function which wraps arc.js functionality for creation of Great Cirlce arcs.

[Demo](http://mad-gooze.github.io/Leaflet.Arc/)
## Usage
Include [Leaflet.js](http://leafletjs.com/), [arc.js](https://github.com/springmeyer/arc.js) and [Leaflet.Arc.js](https://raw.githubusercontent.com/MAD-GooZe/Leaflet.Arc/gh-pages/Leaflet.Arc.js):
```html
<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-1.0.0-b1/leaflet.css"/>
<script src="http://cdn.leafletjs.com/leaflet-1.0.0-b1/leaflet.js"></script>
<script src='http://api.mapbox.com/mapbox.js/plugins/arc.js/v0.1.0/arc.js'></script>
<script src='Leaflet.Arc.js'></script>
```
Create arcs!
```javascript
 L.Polyline.Arc([43.11667, 131.90000], [55.7522200, 37.6155600]).addTo(map);
```
You can also change number of vertices in line or use all L.Polyline options:
```javascript
 L.Polyline.Arc([59.56667, 150.80000], [67.50000, 64.03333], {
    color: "red",
    vertices: 200
}).addTo(map);
```
## API
```javascript
L.Polyline.Arc(from, to, options)
```
Returns general _L.Polyline_ object.
#### from, to
L.latLng objects representing the beginning and the end of arc
options
#### options
Optional object to declare options. Possible properties (inherited from [arc.js options](https://github.com/springmeyer/arc.js/#arc-options)):

* _vertices_ - number of intermediate vertices in resulting arc;
* _offset_ - controls the likelyhood that lines will be split which cross the dateline

All _L.Polyline_ options are also supported.