function initMap() {
    const destination = { lat: [LATITUDE], lng: [LONGITUDE] }; // Replace with actual latitude and longitude

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: destination,
    });

    const marker = new google.maps.Marker({
        position: destination,
        map: map,
        title: '[Destination Name]',
    });
}

// This function is called by the Google Maps API when the map script is loaded
window.initMap = initMap;
