import {Component, OnInit} from '@angular/core';
import {User} from "../user.model";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  newUser:User = new User( "", "", 0, "", null);

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  addUser(): void {
    this.userService.addUser(this.newUser).subscribe();
  }

}
