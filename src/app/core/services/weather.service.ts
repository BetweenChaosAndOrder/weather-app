import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry, catchError, Observable, throwError } from 'rxjs';
import { CurrentWeather } from '../models/CurrentWeather';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeather(latitude: number, longitude: number): Observable<CurrentWeather> {
    return this.httpClient.get<CurrentWeather>('https://api.open-meteo.com/v1/forecast?latitude='+ latitude +'&longitude='+ longitude +'&current_weather=true')
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  httpError(error: any) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(() => new Error(msg));
  }
  
}