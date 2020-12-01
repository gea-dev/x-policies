import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { APP_NAME } from './config/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private title:Title
  ){
    title.setTitle(`Privacy & Terms | ${APP_NAME}`);
  }

  
}
