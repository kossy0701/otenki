import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public title = 'otenki';
  public loadingObservable: Observable<boolean>;

  constructor(public loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingObservable = this.loadingService.loading;
  }
}
