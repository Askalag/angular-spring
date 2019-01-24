import { Component, OnInit } from '@angular/core';
import {User} from "./user.model";
import {ActivatedRoute} from "@angular/router";
import {UserListService} from "../../../components/user-list/user-list.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = new User(null, "", "", 0, "", null);

  constructor(private route: ActivatedRoute,
              private userService: UserListService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    let id: string = this.route.snapshot.paramMap.get("id");
    this.userService.getUser(id).subscribe(data => this.user = data);
  }

}
