import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  busData;
  busResults;
  buses;
  loggedinUser;
  constructor(private bookingService: BookingService) {

    this.busData = new FormGroup({
      'source': new FormControl('', Validators.required),
      'destination': new FormControl('', Validators.required),
      'departDate': new FormControl('', Validators.required)
      
    })
  }

  ngOnInit(): void {
    this.loggedinUser=window.sessionStorage.getItem('name');
    console.log(this.loggedinUser);
  }

  getBuses() {

    console.log(this.busData.value);
    this.bookingService.getbusData(this.busData.value).subscribe((data) => {
      console.log(data);
      this.busResults=data;
      // this.buses=this.busResults[0].buses
      // console.log(this.buses);
    })

  }

  setBusData(busInfo)
  {
    this.bookingService.setBusInfo(busInfo)
  }

}
