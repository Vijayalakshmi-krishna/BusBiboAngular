import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-bus-operator',
  templateUrl: './bus-operator.component.html',
  styleUrls: ['./bus-operator.component.css']
})
export class BusOperatorComponent implements OnInit {
  busData;
  constructor(private bookingservice:BookingService) {
    this.busData=new FormGroup({
      'agencyname':new FormControl('',Validators.required),
      'source':new FormControl('',Validators.required),
      'destination':new FormControl('',Validators.required),
      'busNum':new FormControl('',Validators.required),
      'departDate':new FormControl('',Validators.required),
      'departTime':new FormControl('',Validators.required),
      'avlSeats':new FormControl('',Validators.required)
      
    })
   }

  ngOnInit(): void {
  }

  addbus()
  {
    if(this.busData.valid)
    {
      this.bookingservice.addbusData(this.busData.value).subscribe((data)=>{

        console.log(data);
      })
    }
  }
}
