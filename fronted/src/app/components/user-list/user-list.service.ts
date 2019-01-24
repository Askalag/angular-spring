import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';

import {User} from "../../shared/models/user/user.model";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable()
export class UserListService {

  constructor(private http: HttpClient) {

  }
  getUser(id: string): Observable<User> {
    return this.http.get<User>("/api/users/" + id, httpOptions)
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("/api/users/");
  }
  addUser(user: User) : Observable<User> {
    return this.http.post<User>("/api/users/", user, httpOptions);
  }
  deleteUser(id: string) : Observable<{}> {
    return this.http.delete("/api/users/" + id , httpOptions);
  }
  updateUser(user: User) : Observable<User> {
    return this.http.put<User>("/api/users/", user, httpOptions)
  }
  userSearch(value: string) : Observable<User[]> {
    value = value.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = value ?
      { params: new HttpParams().set('nickName', value) } : {};

    return this.http.get<User[]>("/api/users/search", options)
  }

}
