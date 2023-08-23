import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/ticket.service';
import { ITour } from '../../../models/tours';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.scss'],
})
export class TicketsListComponent implements OnInit {
  tickets: ITour[] = [];
  constructor(private ticketService: TicketService) {}

  ngOnInit() {
    this.ticketService.getTickets().subscribe((data: ITour[]) => {
      this.tickets = data;
    });
  }
}
