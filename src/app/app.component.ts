import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  currentname = new BehaviorSubject('');
  constructor() {
    this.currentname.subscribe((res) => {
      if (res) {
        console.log(res);
      }
    });
  }

  yes() {
    this.currentname.next('bhavesh');
    this.currentname.complete();
    this.currentname.next('Jay'); // it will not take new name after complete
  }
}
