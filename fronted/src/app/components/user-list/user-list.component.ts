import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../shared/models/user/user.model";
import {UserListService} from "./user-list.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  searchPlace: string;

  constructor(private userService: UserListService) { }

  public users:User[];

  onGetUsers(): void {
    this.userService.getUsers().subscribe(data => this.users = data);
  }
  onAddUser(user: User): void {
    this.userService.addUser(user).subscribe(data => this.users.push(data));
  }
  onDeleteUser(user: User) : void {
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user.id).subscribe();
  }
  onUpdateUser(user: User) : void {}

  onSearch(value: string) : void {
    if (value) {
      this.userService.userSearch(value)
        .subscribe(data => this.users = data);
    }
  }


  ngOnInit() {

  }

}
