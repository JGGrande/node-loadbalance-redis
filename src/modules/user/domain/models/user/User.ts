interface ICreateUserProps {
  id: string;
  name: string;
  login: string;
  password: string;
}

export class User {
  private _id: string;
  private _name: string;
  private _login: string;
  private _password: string;

  constructor({ id, name, login, password }:ICreateUserProps){
    this._id = id;
    this._name = name;
    this._login = login;
    this._password = password;
  }

  get id(){
    return this._id;
  }
  get name(){
    return this._name;
  }
  get login(){
    return this._login;
  }
  get password(){
    return this._password;
  }
  set name(value:string){
    this._name = value;
  }
  set login(value:string){
    this._login = value;
  }
  set password(value:string){
    this._password = value;
  }

}