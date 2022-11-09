import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { CurrentWeather } from './core/models/CurrentWeather';
import { WeatherService } from './core/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map?: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info?: MapInfoWindow;

  zoom = 12;
  center: google.maps.LatLngLiteral = {
    lat: 	37.210388,
    lng: -93.297256
  };

  currentWeather?: CurrentWeather;

  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'hybrid'
  };

  markers: any = [];
  infoContent = '';

  constructor(
    private weatherService: WeatherService
  ) {
    this.weatherService.getWeather(this.center.lat, this.center.lng)
      .subscribe((currentWeather: CurrentWeather) => {
        this.currentWeather = currentWeather;
      });
  }

  ngOnInit(): void {
    // Check Current Location
    // If not available use Coordinates for Springfield, MO
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }

  displayMapWeather(): void {
    let currentLatitude: number | undefined = this.map?.getCenter()?.lat();
    let currentLongitude: number | undefined = this.map?.getCenter()?.lng();

    if(currentLatitude !== undefined && currentLongitude !== undefined) {
      this.center = {
        lat: currentLatitude,
        lng: currentLongitude
      }
    }

    console.log(this.center);
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom!) this.zoom++;
  }
  zoomOut() {
    if (this.zoom > this.options.minZoom!) this.zoom--;
  }
  click(event: google.maps.KmlMouseEvent) {
    console.log(event);
  }
  logCenter() {
    console.log(JSON.stringify(this.map!.getCenter()));
  }
  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    });
  }
}