

    "use strict";
    function initMap() {
      let london = {lat: 51.521296, lng: -0.131818};
      let bigben = {lat: 51.500889, lng: -0.124625};
      let leics = {lat: 51.510805, lng: -0.129599};
      let mapDemo = document.getElementById("map");


      let map = new google.maps.Map(mapDemo, {
        zoom: 12,
        center: london
      });


      let markerBIGBEN = new google.maps.Marker({
        position: bigben,
        map: map,
        title: 'Icon'
      });
      let markerleics = new google.maps.Marker({
        position: leics,
        map: map,
        title: 'Movie Central'
      });
    }
