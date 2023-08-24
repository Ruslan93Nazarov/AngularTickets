import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket.service';
import { ITour } from '../../../models/tours';
import {IMenuType} from "../../../models/menuType";

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.scss'],
})
export class TicketsListComponent implements OnInit {
  tickets: ITour[] = [];

  constructor(private ticketService: TicketService) {

  }

  ngOnInit():void {
    this.ticketService.getTickets().subscribe((data: ITour[]): void => {
      this.tickets = data;
    });
  }


}
