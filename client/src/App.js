import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import Content from "./components/Content";
// import Footer from "./components/Footer";

class App extends Component {
  componentWillMount() {}
  loadMap() {
    this.locations = this.props.locations;
    let script = document.getElementsByTagName("script")[0];
    const mapScript = this.createMapScript();
    script.parentNode.insertBefore(mapScript, script);
    mapScript.onerror = function() {
      alert("Error loading google map" + this.src);
    };
    window.initMap = this.initMap;
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

  initMap = () => {
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 36.3729, lng: -94.208 },
      zoom: 12
    });
    const infoWindow = new window.google.maps.InfoWindow();
    window.infoWindow = infoWindow;
    window.mapObject = map;
  };

  render() {
    this.loadMap();
    return (
      <div className="App">
        <Header />
        <Content map={this.map} />
      </div>
    );
  }
}

export default App;
