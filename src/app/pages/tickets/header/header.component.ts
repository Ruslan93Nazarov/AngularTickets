import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';
import {IUser} from "../../../models/users";
import {UserService} from "../../../services/user/user.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
    user: IUser;
    items: MenuItem[] | undefined;
    time: Date = new Date();
    private timerInterval: number = 0;

    constructor(private menuBarModule: MenubarModule,
                private userService: UserService) {
        this.user = {
            login: '',
            psw: '',
        };
    }

    ngOnInit(): void {
        this.items = [
            {
                label: 'Tickets',
                routerLink: ['tickets-list'],
            },
            {
                label: 'Quit',
                routerLink: ['/auth'],
            },
        ];

        console.log()
        this.user = this.userService.getUser()

        this.timerInterval = setInterval((): void => {
            this.time = new Date();
        }, 1000);
    }

    ngOnDestroy(): void {
        clearInterval(this.timerInterval);
    }
}
