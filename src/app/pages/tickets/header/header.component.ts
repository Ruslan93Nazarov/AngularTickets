import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';
import {IUser} from "../../../models/users";
import {UserService} from "../../../services/user/user.service";
import {IMenuType} from "../../../models/menuType";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy, OnChanges {
    user: IUser;
    items: MenuItem[] | undefined;
    time: Date = new Date();
    private timerInterval: number = 0;
    private settingActive = false
    @Input() menuType: IMenuType

    constructor(private menuBarModule: MenubarModule,
                private userService: UserService) {
        this.user = {
            login: '',
            psw: '',
        };
        this.menuType = {
            type: '',
            label: ''
        }
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
            console.log('second')
            this.time = new Date();
        }, 1000) as unknown as number
    }

    ngOnChanges(ev: SimpleChanges): void {
        this.settingActive = this.menuType?.type === 'extended';
        this.items = this.initMenuItem()
    }


    ngOnDestroy(): void {
        clearInterval(this.timerInterval);
    }

    initMenuItem(): MenuItem[] {
        return [
            {
                label: 'Tickets',
                routerLink: ['tickets-list'],
            },
            {
                label: 'Settings',
                routerLink: ['/settings'],
                visible: this.settingActive
            },
            {
                label: 'Quit',
                routerLink: ['/auth'],
            },
        ];
    }


}
