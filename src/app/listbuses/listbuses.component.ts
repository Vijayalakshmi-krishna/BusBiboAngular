import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-listbuses',
  templateUrl: './listbuses.component.html',
  styleUrls: ['./listbuses.component.css']
})
export class ListbusesComponent implements OnInit {
allBuses;
  constructor(private bookingservice:BookingService) { }

  ngOnInit(): void {

    this.bookingservice.getBuses().subscribe((data)=>{
      this.allBuses=data;
    })
  }

}
