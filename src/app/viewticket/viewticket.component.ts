import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewticket',
  templateUrl: './viewticket.component.html',
  styleUrls: ['./viewticket.component.css']
})
export class ViewticketComponent implements OnInit {

  userName;
  userEmail;
  userPhone;
  ticketsList;
  constructor(private bookingservice:BookingService,private router:Router) { }

  ngOnInit(): void {
    
    this.userName = sessionStorage.getItem('name');
    this.userEmail = sessionStorage.getItem('email');
    this.userPhone = sessionStorage.getItem('phone');

    this.bookingservice.getUserTickets(this.userEmail).subscribe((data)=>{
      console.log(data);
      this.ticketsList=data;
      console.log(this.ticketsList)
    })

    
  }

  setTicketId(ticketId)
  {
    this.bookingservice.setTicketId(ticketId);
    this.router.navigate(['/printticket'])
  }

}
