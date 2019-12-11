import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Area } from '../shared/models/area';

@Injectable()
export class AreaService {
  private areas: Area[] = [];
  private subject: BehaviorSubject<Area[]>;

  constructor() {
    if (window.localStorage.getItem('area')) {
      this.areas = JSON.parse(window.localStorage.getItem('area')) as Area[];
    }
    this.subject = new BehaviorSubject(this.areas);
    this.subject.subscribe((areas: Area[]) => {
      window.localStorage.setItem('area', JSON.stringify(areas));
    });
  }

  getList(): Observable<Area[]> {
    return this.subject.asObservable();
  }

  save(areas: Area[]) {
    areas = areas.filter(area => {
      return (area.label && area.city);
    }).map((area: Area, index: number) => {
      if (!area.id) {
        area.id = `${Date.now()}-${index}`;
      }
      return area;
    });
    this.areas = [].concat(areas);
    this.subject.next(this.areas);
  }

  delete(id: string) {
    const result = this.areas.findIndex((area: Area) => {
      return (area.id === id);
    });
    if (result !== -1) {
      this.areas.splice(result, 1);
      this.subject.next(this.areas);
    }
  }
}
