import { Component, OnInit } from '@angular/core';
import {User} from "./user.model";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "./user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isEdit: boolean = false;

  user: User = new User( "", "", 0, "", null);

  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    let id: string = this.route.snapshot.paramMap.get("id");
    this.userService.getUser(id).subscribe(data => this.user = data);
  }
  onSave() {
    this.isEdit = false;
    this.userService.updateUser(this.user).subscribe();
  }
  onEdit() {
    this.isEdit = true;
  }

}
