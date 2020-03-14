import { Component } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import { Geolocation } from '@capacitor/core';

import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

import '../../assets/icon/marker-icon-2x.png';


//import workers from '../../assets/workerLocs.json';

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
  workerList = []; // assignment op instead of colon to avoid "property does not exist on type never error"
  
  constructor(public modalController: ModalController) {}
  
  ionViewDidEnter() {
    this.getLocation();
  }


  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    console.log(`From getLocation: ${this.latitude} | ${this.longitude}`);

    this.leafletMap2();
  } // get location

  async presentModal(name) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        'name': name
      }
    });
    return await modal.present();
  }


  // leafletMap() {
  //   // In setView add latLng and zoom
  //   this.map = new Map('mapId').setView([this.latitude, this.longitude], 13);
  //   tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
  //     attribution: 'edupala.com © ionic LeafLet',
  //   }).addTo(this.map);


  //   marker([this.latitude, this.longitude]).addTo(this.map)
  //     .bindPopup('You are here')
  //     .openPopup();
  //     console.log(`From leafletMap() -> Latitude: ${this.latitude} | Longitude: ${this.longitude}`);
  // } // leaflet map

  leafletMap2() {
    this.map = new Map('mapId').setView([this.latitude, this.longitude], 14);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    { attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})
    .addTo(this.map);

    marker([this.latitude, this.longitude]).addTo(this.map)
       .bindPopup('You are here')
       .openPopup();
       console.log(`From leafletMap(2) -> Latitude: ${this.latitude} | Longitude: ${this.longitude}`);
  }


  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }


  showSelected() {
    console.log(`Selected: ${this.category}`);
    
    fetch('../../assets/workerLocs.json').then(res => res.json())
    .then(json => {
      this.workerList = json.werkers;
      // console.log(`WorkerList is: ${typeof this.workerList}`);
      for(const werker of this.workerList) {
        console.log(werker);

        for (const werk of this.workerList) {
          marker([werk.latitude, werk.longitude]).addTo(this.map)
            .bindPopup(werk.name)
            .openPopup().on('click', () => {this.presentModal(werk.name)});  
        } // inner for loop
      } // outter for loop
      
    });

    
  } // method show selected

} // class
