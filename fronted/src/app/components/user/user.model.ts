export class User {

  public id: string;
  public login: string;
  public nickName: string
  public age: number;
  public email: string;
  public date: string;

  constructor( login: string, nickName: string, age: number, email: string, date: string) {
    this.login = login;
    this.nickName = nickName;
    this.age = age;
    this.email = email;
    this.date = date;
  }
}
