// tslint:disable-next-line:no-namespace
export declare namespace OpenWeatherMap {

  export interface Coord {
    log: number;
    lat: number;
  }

  export interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
  }

  export interface Temp {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  }

  export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }

  export interface Main {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  }

  export interface Wind {
    speed: number;
    deg: number;
  }

  export interface Clouds {
    all: number;
  }

  export interface DailyWeather {
    dt: number;
    main: Main;
    temp: Temp;
    pressure: number;
    humidity: number;
    weather: Weather[];
    wind: Wind;
    clouds: number;
    rain: number;
  }

  export interface Sys {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  }

  export interface Forecast {
    city: City;
    cod: string;
    message: number;
    cnt: number;
    list: DailyWeather[];
  }

  export interface Current {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    id: number;
    name: string;
    cod: number;
  }
}
