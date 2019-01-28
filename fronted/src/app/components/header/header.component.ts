import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navLinks = [
    { label: "Home",
      link: "",
      index: 0
    },
    {
      label: 'User List',
      link: 'users',
      index: 1
    }, {
      label: 'Add User',
      link: 'users/new',
      index: 2
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
