import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  constructor() {}
  ngOnInit() {
    console.log('NavbarComponent Initialized');
  }

}
