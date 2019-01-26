import {Component, OnInit} from '@angular/core';
import {UserListService} from "./user-list.service";
import {MatTableDataSource} from "@angular/material";
import {User} from "../user.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public ELEMENT_DATA: User[];

  displayedColumns: string[] = ['position', 'id', 'login', 'nickName', 'age', 'email', 'created', 'actions'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  onFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private userService: UserListService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(resp => {
      this.ELEMENT_DATA = resp;
      this.dataSource.data = this.ELEMENT_DATA;
    });
  }

  onDeleteUser(user: User) : void {
    this.userService.deleteUser(user.id).subscribe();
    this.ELEMENT_DATA = this.ELEMENT_DATA.filter(u => u !== user);
    this.dataSource.data = this.ELEMENT_DATA;
  }
}
