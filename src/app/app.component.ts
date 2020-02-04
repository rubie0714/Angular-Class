import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo01';
  age = 10;

  weeks = ['星期一', '星期二', '星期三'];
  now = new Date();
  sayHi() {
    // alert('hi');
    alert(this.title);
  }
}
