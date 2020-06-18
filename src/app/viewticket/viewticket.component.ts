import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-viewticket',
  templateUrl: './viewticket.component.html',
  styleUrls: ['./viewticket.component.css']
})
export class ViewticketComponent implements OnInit {

  userName;
  userEmail;
  userPhone;
  busInfo;
  constructor(private bookingservice:BookingService) { }

  ngOnInit(): void {
    this.busInfo = this.bookingservice.getBusInfo();
    if(this.busInfo)
    {
      console.log(this.busInfo)
    }
    this.userName = sessionStorage.getItem('name');
    this.userEmail = sessionStorage.getItem('email');
    this.userPhone = sessionStorage.getItem('phone');
  }

}
