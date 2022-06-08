import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { BookSlotComponent } from './book-slot/book-slot.component';
import { SameColorCarsComponent } from './same-color-cars/same-color-cars.component';
import { SearchTicketComponent } from './search-ticket/search-ticket.component';

const routes: Routes = [
  {path:"bookslot", component:BookSlotComponent},
  {path:"home", component:BlankComponent},
  {path:"search", component:SearchTicketComponent},
  {path:"samecolorcars", component:SameColorCarsComponent},
  {path:"**", component:BlankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
