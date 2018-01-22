import {AfterViewInit, Component, ViewChildren, QueryList} from '@angular/core';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit{
  @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>;

  ngAfterViewInit() {
    this.alerts.forEach(alertInstance => console.log(alertInstance));
  }
}
