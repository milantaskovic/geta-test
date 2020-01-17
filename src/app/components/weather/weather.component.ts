import { Component, OnInit } from '@angular/core';

import { WeatherService } from './weather.service';
import { Weather } from './weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  providers: [WeatherService],
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  currentWeather: Weather;

  /**
   * Class constructor
   * 
   * @param weatherService
   */
  constructor(
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.getCurrentWeather();
  }

  getCurrentWeather (): void {
    this.weatherService.getCurrentWeather('Belgrade')
      .subscribe((forecast: Weather) => this.currentWeather = forecast);
  }
}
