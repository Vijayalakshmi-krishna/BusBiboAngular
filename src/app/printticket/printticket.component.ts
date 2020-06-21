import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-printticket',
  templateUrl: './printticket.component.html',
  styleUrls: ['./printticket.component.css']
})
export class PrintticketComponent implements OnInit {
ticketId;
ticketInfo;
  constructor(private bookingservice:BookingService) { }

  ngOnInit(): void {

    this.ticketId=this.bookingservice.getTIcketId();
    
    this.bookingservice.getTicket(this.ticketId).subscribe((data)=>{
    console.log(data);
    this.ticketInfo=data;
  })
    

  }

 

}
