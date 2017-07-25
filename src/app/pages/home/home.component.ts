import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Home</h1>
    <div class="header">
      <div class="block">&nbsp;</div>
      <div class="block">&nbsp;</div>
      <div class="block">&nbsp;</div>
    </div>
  `,
  styles: [`
    .block {
      background: #eee;
      float: left;
      width: 80px;
      height: 80px;
      border-radius: 100%;
      margin: 5px;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
