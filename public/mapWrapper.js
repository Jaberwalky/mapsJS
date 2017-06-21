var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
  // this.markers = [];
  // this.bounceMarkers = this.bounceMarkers.bind(this);
}

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    return marker;
    // this.markers.push(marker);
  },
  addClickEvent: function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var position = { lat: event.latLng.lat(), lng: event.latLng.lng() }
      this.addMarker(position);
    }.bind(this));
  },
  addInfoWindow: function(coords, contentString){
    var marker = this.addMarker(coords);
    marker.addListener('click', function(){
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      })
      infowindow.open(this.map, marker)
    });
  }
  // bounceMarkers: function(){
  //   this.markers.forEach(function(marker) {
  //     marker.setAnimation(google.maps.Animation.BOUNCE);
  //   });
  // }
}
