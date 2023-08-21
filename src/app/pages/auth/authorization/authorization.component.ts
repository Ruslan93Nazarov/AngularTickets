import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { IUser } from '../../../models/users';

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

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authTextButton = 'Authorization';
  }
  onAuth(ev: Event): void {
    const authUser: IUser = {
      login: this.login,
      psw: this.login,
    };
    this.authService.checkUser(authUser);
  }
}
