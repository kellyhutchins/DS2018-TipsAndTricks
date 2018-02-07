import WebMap = require("esri/WebMap");
import MapView = require("esri/views/MapView");
const map = new WebMap({
    portalItem: {
        id: "6a7794164bc3428692fa771cd04c0d4b"
    }
});
const view = new MapView({
    map: map,
    container: "viewDiv"
});

// type view.center to see code assist in action 