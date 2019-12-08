import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpenWeatherMapService } from '../services/open-weather-map.service';
import { OpenWeatherMap } from '../shared/models/open-weather-map';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  public currentWeatherObservable: Observable<OpenWeatherMap.Current>;

  constructor(private route: ActivatedRoute, private openWeatherMapService: OpenWeatherMapService) { }

  ngOnInit() {
    this.currentWeatherObservable =
      this.route.params.pipe(switchMap((param: { city: string; }) => {
        return this.openWeatherMapService.current(param.city);
      }));
  }

}
