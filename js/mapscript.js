$(document).ready(function () {
    /*--
     google map
     --*/

    // When the window has finished loading creating google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // If needed, check this later: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 12,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(32.776664, -96.796988), // Dallas

            // Disable zoom & scall in map
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: true,
            draggable: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,

            // How you would like to style the map.

            styles: [{"stylers": [{"hue": "#ff1a00" }, {"invert_lightnes s": true}, {"saturation" : -100}, {"lightness": 33}, {"gamma": 0.5}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"color": "#2D333C"}]}]

        };

        // Get the HTML DOM element that will contain your map
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('googleMap');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng($('#googleMap').attr('data-lat'), $('#googleMap').attr('data-long')),
            map: map,
            title: 'I live here!'
        });
    }
});