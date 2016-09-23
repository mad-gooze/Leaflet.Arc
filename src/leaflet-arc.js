import arc from 'arc';
/**
 * Transform L.LatLng to {x, y} object
 * @param {L.LatLng} latlng
 * @returns {{x: {number}, y: {number}}}
 * @private
 */
const _latLngToXY = latlng => ({
    x: latlng.lng,
    y: latlng.lat
});

/**
 * Create array of L.LatLng objects from line produced by arc.js
 * @param {object} line
 * @param {L.LatLng} from
 * @private
 * @returns {Array}
 */
function _createLatLngs(line, from) {
    if (line.geometries[0] && line.geometries[0].coords[0]) {
        /**
         * stores how many times arc is broken over 180 longitude
         * @type {number}
         */
        let wrap = from.lng - line.geometries[0].coords[0][0] - 360;

        return line.geometries
            .map(subLine => {
                wrap += 360;
                return subLine.coords.map(point => L.latLng([point[1], point[0] + wrap]));
            })
            .reduce((all, latlngs) => all.concat(latlngs));
    } else {
        return [];
    }
}

if (!L) {
    throw new Error('Leaflet is not defined');
} else {
    /**
     *
     * @param {L.LatLng} _from
     * @param {L.LatLng} _to
     * @param {...object} _options
     * @param {..number} _options.vertices
     * @param {..number} _options.offset
     * @returns {L.Polyline}
     * @constructor
     */
    L.Polyline.Arc = (_from, _to, _options) => {

        const from = L.latLng(_from);
        const to = L.latLng(_to);
        const options = {
            vertices: 10,
            offset: 10,
            ..._options
        };

        const generator = new arc.GreatCircle(_latLngToXY(from), _latLngToXY(to));

        const arcLine = generator.Arc(options.vertices, {offset: options.offset});
        const latLngs = _createLatLngs(arcLine, from);
        return L.polyline(latLngs, options);
    };
}
