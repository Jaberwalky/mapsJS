var initialize = function(){
  var container = document.getElementById('main-map')
  var coords = {lat: 40.712784, lng: -74.005941}
  var zoom = 10;
  var mainMap = new MapWrapper(container, coords, zoom);

  mainMap.addClickEvent();
  mainMap.addInfoWindow(coords, "New Yawk, New Yawk!");

  var takeMe = document.querySelector("#take-me-to-edinburgh");
  console.log(takeMe)

  var takeMeToLondon = function(){
    var london = { lat: 51.5074, lng: -0.1278 };
    mainMap.googleMap.panToBounds(london);
  }
  takeMe.addEventListener('click', takeMeToLondon);


  // var bounceButton = document.querySelector('#button-bounce-markers');
  // bounceButton.addEventListener('click', mainMap.bounceMarkers)








}

window.addEventListener('load', initialize)
