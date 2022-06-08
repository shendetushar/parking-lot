import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedServicesService } from '../sharedServices/shared-services.service';

@Component({
  selector: 'app-book-slot',
  templateUrl: './book-slot.component.html',
  styleUrls: ['./book-slot.component.css']
})
export class BookSlotComponent implements OnInit {

  bookingForm:any
  successMessage:any
  errorMessage:any
  constructor(private fb: FormBuilder, private _service: SharedServicesService) {}

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      ownerName: ['', [ Validators.required]],
      registrationNumber:['',[Validators.required]],
      color: ['', [ Validators.required]],
      company: ['', [Validators.required]],
      contactNumber: ['', [Validators.required]],
    });
  }
  
  bookSlot(){
    this._service.bookSlot(this.bookingForm.value).subscribe(
      (response)=>{
        this.successMessage=response;
        this.errorMessage=null
      },
      (errorResponse) => {
          this.errorMessage = "slot is already booked if not retry";
          this.successMessage=null
      }
    )
  }
}
