import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { IUser } from '../../../models/users';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import {UserService} from "../../../services/user/user.service";

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
    private messageService: MessageService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.authTextButton = 'Authorization';
  }

  onAuth(ev: Event): boolean {
    const authUser: IUser = {
      login: this.login,
      psw: this.psw,
    };

    if (this.authService.checkUser(authUser)) {
      if (this.authService.checkUserPsw(authUser)) {
        this.messageService.add({
          severity: 'success',
          detail: 'successful login',
        });
        this.userService.serUser(authUser)
        this.router.navigate(['tickets/tickets-list']);
        return true;
      } else {
        this.messageService.add({
          severity: 'error',
          detail: 'Password mismatch',
        });
        return false;
      }
    }
    this.messageService.add({
      severity: 'error',
      detail: 'invalid login',
    });
    return false;
  }
}
