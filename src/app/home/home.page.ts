import { Component } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import { Geolocation } from '@capacitor/core';

import '../../assets/icon/marker-icon-2x.png';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  map: Map;
  latitude: any;
  longitude: any;
  category: string;
  
  ionViewDidEnter() {
    this.getLocation();
  }


  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    console.log(`From getLocation: ${this.latitude} | ${this.longitude}`);

    this.leafletMap();
  }

  // leafletMap() {
  //   // In setView add latLng and zoom
  //   this.map = new Map('mapId').setView([6.6980, 3.4157], 12);
  //   tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
  //     attribution: 'edupala.com © ionic LeafLet',
  //   }).addTo(this.map);


  //   marker([6.6980, 3.4157]).addTo(this.map)
  //     .bindPopup('You are here')
  //     .openPopup();
  // }

  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('mapId').setView([this.latitude, this.longitude], 13);
    tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'edupala.com © ionic LeafLet',
    }).addTo(this.map);


    marker([this.latitude, this.longitude]).addTo(this.map)
      .bindPopup('You are here')
      .openPopup();
      console.log(`From leafletMap() -> Latitude: ${this.latitude} | Longitude: ${this.longitude}`);
  } // leaflet map


  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }

  showSelected() {
    console.log(`Selected: ${this.category}`);
  }

} // class
