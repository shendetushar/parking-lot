import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  bookSlotUrl="http://localhost:2000/user/newparking"
  searchTicketUrl="http://localhost:2000/user/ticketdetail"
  getRegistrationNumberByColorUrl="http://localhost:2000/user/allcars"
  constructor(private http: HttpClient) { }

  bookSlot(data: any): Observable<any> {
    return <Observable<any>> this.http.post(this.bookSlotUrl, data);
  }

  searchTicket(data: any): Observable<any> {
    return <Observable<any>> this.http.post(this.searchTicketUrl, data);
  }

  searchRegNumbers(data: any): Observable<any> {
    return <Observable<any>> this.http.post(this.getRegistrationNumberByColorUrl, data);
  }
}
