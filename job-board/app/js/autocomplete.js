initialize = () => {

const input = document.getElementById('autocomplete');
this.autocomplete = new google.maps.places.Autocomplete(input);
}

getLocationInfos = () => {
  console.log(this.autocomplete.getPlace());
}

google.maps.event.addDomListener(window, 'load', initialize);
