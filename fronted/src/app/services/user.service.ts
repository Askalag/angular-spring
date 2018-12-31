import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../shared/models/user/user.model";

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) {

  }

  getUsers() {
    return this.httpClient.get<User[]>("/api/users/");
  }
}
