import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  items: MenuItem[] | undefined;
  time: Date = new Date();
  private timerInterval: number = 0;

  constructor(private menuBarModule: MenubarModule) {}
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

    this.timerInterval = setInterval((): void => {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timerInterval);
  }
}
