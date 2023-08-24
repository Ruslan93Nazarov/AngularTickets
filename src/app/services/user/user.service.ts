import { Injectable } from '@angular/core';
import {IUser} from "../../models/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: IUser;
  constructor() {
    this.user = {
      login: '',
      psw: ''
    }
  }


  getUser():IUser {
    console.log(this.user)
    return this.user
  }

  serUser(user: IUser): void {
    console.log(user)
   this.user = user
  }
}
