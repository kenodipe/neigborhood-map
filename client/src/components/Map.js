import React, { Component } from "react";

import config from "../config";

class Map extends Component {
  componentDidMount() {
    this.loadGoogleScript();
  }
  loadGoogleScript() {
    let script = document.getElementsByTagName("script")[0];
    const mapScript = this.createMapScript();
    script.parentNode.insertBefore(mapScript, script);
    window.initMap = this.initMap;
  }

  initMap() {
    let map = new window.google.maps.Map(document.getElementById("map"), {
      // 36.3729° N, 94.2088° W
      center: { lat: 36.3729, lng: -94.208 },
      zoom: 13
    });
    let walmart = { lat: 36.358498566, lng: -94.209832494 };
    let marker = new window.google.maps.Marker({
      position: walmart,
      map: map,
      title: "Neigborhood Market"
    });
    let infoWindow = new window.google.maps.InfoWindow({
      content: "This is a newighorhood market!"
    });
    marker.addListener("click", function() {
      infoWindow.open(map, marker);
    });
  }

  createMapScript() {
    let key = "AIzaSyANGV56zbtmOCV18Jc86m9oBoNQHB4iyKg";
    const src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`;
    let mapScript = document.createElement("script");
    mapScript.src = src;
    mapScript.async = true;
    mapScript.defer = true;
    return mapScript;
  }
  render() {
    return <div id="map" />;
  }
}

export default Map;