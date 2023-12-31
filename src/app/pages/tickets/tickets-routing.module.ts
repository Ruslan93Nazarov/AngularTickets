import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './tickets.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';

const routes: Routes = [
  {
    path: '',
    component: TicketsComponent,
    children: [
      {
        path: 'tickets-list',
        component: TicketsListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsRoutingModule {}
