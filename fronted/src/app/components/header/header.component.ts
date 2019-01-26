import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navLinks = [
    {
      label: 'User List',
      link: 'users',
      index: 0
    }, {
      label: 'Add User',
      link: 'users/new',
      index: 1
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
