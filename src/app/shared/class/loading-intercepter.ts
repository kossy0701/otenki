import { Injectable } from '@angular/core';
import { HttpEvent, HttpClient, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../../services/loading.service';

@Injectable()
export class LoadingIntercepter implements HttpInterceptor {
  constructor(private loadingservice: LoadingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    this.loadingservice.start();
    return next.handle(request).pipe(finalize(() => {
      this.loadingservice.stop();
    }));
  }
}
