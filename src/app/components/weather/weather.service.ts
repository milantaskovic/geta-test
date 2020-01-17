import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/internal/operators/map';
import { Weather } from './weather.interface';

const apiKey: string = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  /**
   * Class constructor
   * 
   * @param http
   */
  constructor(
    private http: HttpClient
    ) { }

  getCurrentWeather(loc: string) {
    return this.http.get(`${environment.apiUrl}/weather?q=${loc}&appid=${apiKey}&units=metric`)
      .pipe(
        map((res: any): Weather => ({
          temp: {
            current: res.main.temp,
            min: res.main.temp_min,
            max: res.main.temp_max,
            feels_like: res.main.feels_like
          },
          main: res.weather[0].main,
          humidity: res.main.humidity,
          city: res.name
        }))
      );
  }

  getForecast(loc: string) {
    return this.http.get(`${environment.apiUrl}/forecast?q=${loc}&appid=${apiKey}`)
  }
}