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

  currentWeather: CurrentWeather = {
    latitude: 37.210388,
    longitude: -93.297256,
    generationtime_ms: 0,
    utc_offset_seconds: 0,
    timezone: "GMT",
    timezone_abbreviation: "GMT",
    elevation: 0,
    current_weather: {
      temperature: 0,
      windspeed: 0,
      winddirection: 0,
      weathercode: 0,
      time: 'time'
    }
  };

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
        console.log(this.currentWeather)
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

    this.weatherService.getWeather(this.center.lat, this.center.lng)
      .subscribe((currentWeather: CurrentWeather) => {
        this.currentWeather = currentWeather;
      });
  }
}