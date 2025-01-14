import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-accounts',
  standalone: false,

  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit{
  constructor() {}
  ngOnInit() {
    console.log('AccountsComponent Initialized');
  }

}
