import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  constructor() { }
  @Input() type: string = "success";

  public alert() {
    console.log("alert");
  }
}
