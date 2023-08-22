import { Injectable } from '@angular/core';
import { IUser } from '../../models/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  checkUser(userInStorage: IUser): boolean {
    const isLocalStorageUsers: string | null = localStorage.getItem(
      'user ' + userInStorage.login
    );

    if (isLocalStorageUsers !== null) {
      return JSON.parse(isLocalStorageUsers);
    } else {
      return false;
    }
  }
  checkUserPsw(userInStorage: IUser): boolean {
    const isLocalStorageUsers: string | null = localStorage.getItem(
      'user ' + userInStorage.login
    );
    if (isLocalStorageUsers !== null) {
      const isUserObj = JSON.parse(isLocalStorageUsers);
      return isUserObj.psw === userInStorage.psw;
    }
    return false;
  }
}
