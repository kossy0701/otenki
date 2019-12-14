import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenWeatherMapService } from '../services/open-weather-map.service';
import { OpenWeatherMap } from '../shared/models/open-weather-map';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { transition, trigger, useAnimation, query, stagger, style } from '@angular/animations';
import { slideFadeIn } from '../app.animations';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  animations: [
    trigger('slideFade', [
      transition(':enter', [
        query('mat-list-item', [
        style({
          opacity: 0
        }),
          stagger(100, [
            useAnimation(slideFadeIn)
          ])
        ])
      ])
    ])
  ]
})

export class ForecastComponent implements OnInit {
  public currentWeatherObservable: Observable<OpenWeatherMap.Current>;
  public forecastObservable: Observable<OpenWeatherMap.Forecast>;

  constructor(private route: ActivatedRoute, private openWeatherMapService: OpenWeatherMapService) { }

  ngOnInit() {
    this.currentWeatherObservable =
      this.route.params.pipe(switchMap(param => {
        return this.openWeatherMapService.current(param.city);
      }));

    this.forecastObservable = this.route.params.pipe(switchMap(param => {
      return this.openWeatherMapService.forecast(param.city);
    }));
  }

}
