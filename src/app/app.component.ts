import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    // title: string;
    constructor() {

    };
    ngOnInit() {
      // this.title = 'hello using data binding';
    }
}
