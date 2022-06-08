import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookSlotComponent } from './book-slot/book-slot.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BlankComponent } from './blank/blank.component';
import { SearchTicketComponent } from './search-ticket/search-ticket.component';
import { SameColorCarsComponent } from './same-color-cars/same-color-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    BookSlotComponent,
    BlankComponent,
    SearchTicketComponent,
    SameColorCarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
