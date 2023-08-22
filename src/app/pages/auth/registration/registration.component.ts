import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IUser } from '../../../models/users';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  login: string = '';
  psw: string = '';
  pswRepeat: string = '';
  email: string = '';
  cardNumber: string = '';
  saveToLocalStorage: boolean = false;

  constructor(
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  registrationToLocalStorage(ev: Event): void | boolean {
    if (this.psw !== this.pswRepeat) {
      this.messageService.add({
        severity: 'error',
        detail: "password and confirm the password don't match ",
      });
      return false;
    }

    const userObj: IUser = {
      psw: this.psw,
      cardNumber: this.cardNumber,
      login: this.login,
      email: this.email,
    };

    const isLocalStorageUsers: string | null = localStorage.getItem('user');

    if (isLocalStorageUsers !== null) {
      const isArrayUsersFromLocalStorage: Array<IUser> =
        JSON.parse(isLocalStorageUsers);

      const isUserExists: IUser | undefined = isArrayUsersFromLocalStorage.find(
        (user: IUser): boolean => user.login === userObj.login
      );
      if (isUserExists) {
        this.messageService.add({
          severity: 'error',
          detail: 'user with this login is already registered',
        });
      } else {
        isArrayUsersFromLocalStorage.push(userObj);
        localStorage.setItem(
          'user',
          JSON.stringify(isArrayUsersFromLocalStorage)
        );
        this.messageService.add({
          severity: 'success',
          detail: 'registration complete',
        });
      }
    } else {
      localStorage.setItem('user', JSON.stringify([userObj]));
      this.messageService.add({
        severity: 'success',
        detail: 'registration complete',
      });
    }
  }
}
