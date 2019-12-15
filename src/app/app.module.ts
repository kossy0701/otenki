import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';
import { ChartsModule } from 'ng2-charts';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingIntercepter } from './shared/class/loading-intercepter';
import { LoadingService } from './services/loading.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatProgressBarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { AreaEditComponent } from './area-edit/area-edit.component';
import { ForecastComponent } from './forecast/forecast.component';

import { AreaService } from './services/area.service';
import { OpenWeatherMapService } from './services/open-weather-map.service';
import { UnixTimeDatePipe } from './pipes/unix-time-date.pipe';

registerLocaleData(localeJa, 'ja');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AreaEditComponent,
    ForecastComponent,
    UnixTimeDatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ja-JP'},
    OpenWeatherMapService,
    AreaService,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingIntercepter, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
