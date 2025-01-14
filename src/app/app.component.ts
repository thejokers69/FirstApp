import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstApp';
}
