export class User {

  public id: string;
  public login: string;
  public nickName: string
  public age: number;
  public email: string;
  public date: string;

  constructor( id: string, login: string, nickName: string, age: number, email: string, date: string) {
    this.id = id;
    this.login = login;
    this.nickName = nickName;
    this.age = age;
    this.email = email;
    this.date = date;
  }
}
