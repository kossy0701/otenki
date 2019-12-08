import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OpenWeatherMap } from '../shared/models/open-weather-map';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService {

  constructor(public http: HttpClient) { }

  current(city: string): Observable<OpenWeatherMap.Current> {
    let params: HttpParams = new HttpParams();
    const data = {
      appid: environment.APP_ID,
      units: 'metric',
      lang: 'jp',
      q: city
    };
    // tslint:disable-next-line:only-arrow-functions
    Object.keys(data).forEach(function(key) {
      params = params.set(key, data[key]);
    });
    return this.http.get<OpenWeatherMap.Current>(`${environment.API}/weather`, { params });
  }
}
