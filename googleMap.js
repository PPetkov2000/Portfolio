function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.13333, lng: 24.71667 },
    zoom: 8,
  });
  function addMarker(props) {
    const marker = new google.maps.Marker({
      position: props.coords,
      map,
    });
    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    if (props.content) {
      const infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });
      marker.addEventListener("click", function () {
        infoWindow.open(map, marker);
      });
    }
  }
  addMarker({
    coords: { lat: 43.13333, lng: 24.71667 },
    iconImage: "",
    content: "<h2>Info Window</h2>",
  });
}
