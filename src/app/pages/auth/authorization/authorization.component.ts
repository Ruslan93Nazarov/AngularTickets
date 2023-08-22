import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { IUser } from '../../../models/users';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit {
  loginText: string = 'Login';
  pswText: string = 'Password';
  login: string = '';
  psw: string = '';
  cardNumber: string = '';
  checked: boolean = false;
  authTextButton: string = '';

  constructor(
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.authTextButton = 'Authorization';
  }
  onAuth(ev: Event): boolean {
    const authUser: IUser = {
      login: this.login,
      psw: this.login,
    };
    if (this.authService.checkUser(authUser)) {
      this.messageService.add({
        severity: 'success',
        detail: 'successful login',
      });
      return true;
    }
    this.messageService.add({
      severity: 'error',
      detail: 'invalid login',
    });
    return false;
  }
}
