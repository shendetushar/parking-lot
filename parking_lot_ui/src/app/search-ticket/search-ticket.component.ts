import { Component, OnInit } from '@angular/core';
import { SharedServicesService } from '../sharedServices/shared-services.service';

@Component({
  selector: 'app-search-ticket',
  templateUrl: './search-ticket.component.html',
  styleUrls: ['./search-ticket.component.css']
})
export class SearchTicketComponent implements OnInit {

  registrationNumber:any=""  
  ticketData:any
  errorMessage:any
  constructor(private _serivces:SharedServicesService) { }

  ngOnInit(): void {
  }

  search(registrationNumber: any){
    const obj={
      registrationNumber: registrationNumber
    }
    this._serivces.searchTicket(obj).subscribe(
      (response)=>{
        console.log(response);
        
        this.ticketData=response;
      },
      (errorResponse)=>{
        this.errorMessage="No ticket data found for registration number "+this.registrationNumber
      }
    )
  }
}
