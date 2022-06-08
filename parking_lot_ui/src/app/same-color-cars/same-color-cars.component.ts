import { Component, OnInit } from '@angular/core';
import { SharedServicesService } from '../sharedServices/shared-services.service';

@Component({
  selector: 'app-same-color-cars',
  templateUrl: './same-color-cars.component.html',
  styleUrls: ['./same-color-cars.component.css']
})
export class SameColorCarsComponent implements OnInit {

  registartionNumberData:any
  color:any;
  errorMessage:any
  constructor(private _services:SharedServicesService) { }

  ngOnInit(): void {
  }
search(color:any){
  const obj={
    color: color
  }
  this._services.searchRegNumbers(obj).subscribe(
    (response)=>{
      if(response==null){
        this.errorMessage="No Data found for "+color+" color"
      }
      this.registartionNumberData=response;
    },
    (errorResponse)=>{
      this.errorMessage="No Data found"
    }
  )
}
}
