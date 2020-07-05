import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { BookingService } from '../booking.service';
import { formatDate } from "@angular/common";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[DatePipe]
})
export class HomeComponent implements OnInit {
  busData;
  busResults;
  buses;
  loggedinUser;
  // upcomingBuses;
  currDate;
  todayDate;
  isSearchClicked:boolean=false;
  isNobuses:boolean=false;
  constructor(private bookingService: BookingService,private datePipe:DatePipe) {

    this.busData = new FormGroup({
      'source': new FormControl('', Validators.required),
      'destination': new FormControl('', Validators.required),
      'departDate': new FormControl('', Validators.required)
      
    })
  }

  ngOnInit(): void {
    if(window.sessionStorage.getItem('name') != null)
    {
      this.loggedinUser=window.sessionStorage.getItem('name');
      console.log(this.loggedinUser);
    }
   
    this.todayDate=this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  getBuses() {
    this.isSearchClicked=true;
    console.log(this.busData.value);
    this.bookingService.searchbus(this.busData.value).subscribe((data) => {
      console.log(data);
      this.busResults=data; 

      if (this.busResults.length == 0)
      {
        this.isNobuses=true;
      }
    })

  }

  setBusData(busInfo)
  {
    this.bookingService.setBusInfo(busInfo)
  }

}
