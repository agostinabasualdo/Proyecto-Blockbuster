function initMap() {
    var myLatLng = { lat: -34.5938784, lng: -58.4190746 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: '¡Visítanos y vive la experiencia Blockbuster en nuestra sede!'
    });
}