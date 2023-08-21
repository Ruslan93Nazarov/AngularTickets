import { Injectable } from '@angular/core';
import { IUser } from '../../models/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userStorage: IUser[] = [];

  constructor() {}

  checkUser(user: IUser): string | undefined {
    const isUserExists: IUser | undefined = this.userStorage.find(
      (someUser: IUser): boolean => someUser.login === user.login
    );
    if (isUserExists) {
      return (isUserExists.psw = user.psw);
    }
    return;
  }

  setUser(user: IUser): void {
    const isUserExists: IUser | undefined = this.userStorage.find(
      (someUser: IUser): boolean => someUser.login === user.login
    );
    if (user?.login && !isUserExists) {
      this.userStorage.push(user);
    }
  }

  isUserExists(user: IUser): boolean {
    const isUserExists: IUser | undefined = this.userStorage.find(
      (someUser: IUser) => (someUser.login = user.login)
    );
    return !!isUserExists;
  }
}
