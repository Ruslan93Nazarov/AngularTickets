import { Injectable } from '@angular/core';
import { TicketRestService } from './ticket-rest.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private ticketServiceRest: TicketRestService) {}

  getTickets(): Observable<ITour[]> {
    return this.ticketServiceRest.getTickets();
  }
}
