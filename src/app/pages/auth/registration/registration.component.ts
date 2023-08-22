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

    const isLocalStorageUser: string | null = localStorage.getItem(
      'user ' + userObj.login
    );

    if (isLocalStorageUser !== null) {
      this.messageService.add({
        severity: 'error',
        detail: 'user with this login is already registered',
      });
    } else {
      localStorage.setItem('user ' + userObj.login, JSON.stringify(userObj));
      this.messageService.add({
        severity: 'success',
        detail: 'registration complete',
      });
    }
  }
}
