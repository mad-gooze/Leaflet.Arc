# [Leaflet.Arc](https://github.com/MAD-GooZe/Leaflet.Arc)  [![Build Status](https://travis-ci.org/mad-gooze/Leaflet.Arc.svg?branch=master)](https://travis-ci.org/mad-gooze/Leaflet.Arc) [![npm version](https://img.shields.io/npm/v/leaflet-arc.svg)](https://www.npmjs.com/package/leaflet-arc)
> Leaflet.js plugin for drawing Great Circle arcs using arc.js

This [Leaflet.js](http://leafletjs.com/) plugin adds L.Polyline.Arc function which wraps [arc.js](https://github.com/springmeyer/arc.js) functionality for drawing Great Circle arcs on your maps.

Tested with Leaflet v1.0.0-beta.2 and v1.0.0-rc.3

[Demo](http://mad-gooze.github.io/Leaflet.Arc/)
## Usage & Installation
1. Include [leaflet-arc.min.js](https://github.com/mad-gooze/Leaflet.Arc/blob/master/bin/leaflet-arc.min.js) after Leaflet:
   
    ```html
    <script src='leaflet-arc.min.js'></script>
    ```
    
    You can use hosted version from unpkg.com:
    
    ```html
    <script src='//unpkg.com/leaflet-arc/bin/leaflet-arc.min.js'></script>
    ```
    
    Or install from npm:
    
    ```shell
    npm install --save leaflet-arc
    ```

2. Create arcs!
    ```javascript
     L.Polyline.Arc([43.11667, 131.90000], [55.7522200, 37.6155600]).addTo(map);
    ```
    
    You can also change number of vertices in line or use all L.Polyline options:
    
    ```javascript
     L.Polyline.Arc([59.56667, 150.80000], [67.50000, 64.03333], {
        color: 'red',
        vertices: 200
    }).addTo(map);
    ```
    
## API
```javascript
L.Polyline.Arc(from, to, [options])
```
Returns general `L.Polyline` object.
#### from, to
`L.LatLng` objects representing the beginning and the end of arc
options
#### options
Object to bypass options. Possible properties (inherited from [arc.js options](https://github.com/springmeyer/arc.js/#arc-options)):

* `vertices` - number of intermediate vertices in resulting arc;
* `offset` - controls the likelyhood that lines will be split which cross the dateline

All `L.Polyline` options are also supported.
