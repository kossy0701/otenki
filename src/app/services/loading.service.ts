import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private countLoading = 0;
  private subject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  get loading(): Observable<boolean> {
    return this.subject.asObservable();
  }

  start() {
    ++this.countLoading;
    this.subject.next(true);
  }

  stop(force: boolean = false) {
    --this.countLoading;
    if (force || this.countLoading === 0) {
      this.countLoading = 0;
      this.subject.next(false);
    }
  }
}
