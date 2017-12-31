const _ = require('lodash');

let result = _.flowRight(encodeURI,JSON.stringify, simpleGeoJSON);
console.log(result());

//marker = simpleJSON(); 
//console.log(marker);
//markerStringify = JSON.stringify(marker);
//console.log(markerStringify);
//markerStringEncoded = encodeURI(markerStringify);
//console.log(markerStringEncoded);
const partial_marker = encodeURI(JSON.stringify(simpleGeoJSON()));
const marker1 = `geojson(${partial_marker})`;
console.log(marker1);


function simpleGeoJSON() {
    return {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [0, 0]
            },
            "properties": {
                // OPTIONAL: default ""
                // A title to show when this item is clicked or
                // hovered over
                "title": "A title",

                // OPTIONAL: default ""
                // A description to show when this item is clicked or
                // hovered over
                "description": "A description",

                // OPTIONAL: default "medium"
                // specify the size of the marker. sizes
                // can be different pixel sizes in different
                // implementations
                // Value must be one of
                // "small"
                // "medium"
                // "large"
                "marker-size": "medium",

                // OPTIONAL: default ""
                // a symbol to position in the center of this icon
                // if not provided or "", no symbol is overlaid
                // and only the marker is shown
                // Allowed values include
                // - Icon ID from the Maki project at http://mapbox.com/maki/
                // - An integer 0 through 9
                // - A lowercase charecter "a" through "z"
                "marker-symbol": "bus",

                // OPTIONAL: default "7e7e7e"
                // the color or the marker is by default
                // a color to which the graphic is tinted
                //
                // marker-color must be a valid hex color
                // it can be in short form:
                //   marker-color: "#ace"
                // or long form
                //   marker-color: "#aaccee"
                // But other color formats or named colors
                // are not supported
                "marker-color": "#fff"
            }
        }]
    }
}
