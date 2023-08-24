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
    return this.user
  }

  serUser(user: IUser): void {
   this.user = user
  }
}
