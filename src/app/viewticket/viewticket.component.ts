import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';

import { formatDate } from "@angular/common";

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
  seats;
  blockedSeats = [];
  upcoming;
  completed;
  cancelled;
  isCancelled: boolean = false;
  allowCancel: boolean = false;
  isCancelClicked: boolean = false;
  constructor(private bookingservice: BookingService, private router: Router) { }

  ngOnInit(): void {

    this.userName = sessionStorage.getItem('name');
    this.userEmail = sessionStorage.getItem('email');
    this.userPhone = sessionStorage.getItem('phone');

    this.bookingservice.getUserTickets(this.userEmail).subscribe((data) => {

      this.ticketsList = data;

      this.upcoming = this.ticketsList.filter((item) => {
        var todayDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
        console.log(Date.parse(todayDate));
        return Date.parse(item.departDate) >= Date.parse(todayDate) && item.status != "Cancelled";
      })

      this.completed = this.ticketsList.filter((item) => {
        var todayDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
        console.log(Date.parse(todayDate));
        return Date.parse(item.departDate) < Date.parse(todayDate) && item.status != "Cancelled";
      })

      this.cancelled = this.ticketsList.filter((item) => {
        return item.status == "Cancelled"
      })

    })



  }

  setTicketId(ticketId) {
    this.bookingservice.setTicketId(ticketId);
    this.router.navigate(['/printticket'])
  }

  cancelTicketId(ticketId, seats, busNum, departDate, departTime) {

  
    this.isCancelClicked = true;
    var today = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    if (Date.parse(departDate) > Date.parse(today)) {     
      this.allowCancel = true;
    }
    else if (Date.parse(departDate) == Date.parse(today)) {
      var getTime = new Date();

      var splitTime = departTime.split(':')
      console.log(splitTime);
      var hours = getTime.getHours();
      console.log(hours);
      var minutes = getTime.getMinutes();
      if (splitTime[0] - hours > 5) {

        console.log("Cancel can be done")
        this.allowCancel = true;
      }
      else if (splitTime[0] - hours == 5) {
        if (splitTime[1] > minutes) {
          console.log("cancel allowed")
          this.allowCancel = true;
        }
        else {
          console.log("cancel not allowed")
        }
      }
      else {
        console.log("cancel not allowed")
      }

    }

    if (this.allowCancel) {

      this.bookingservice.ChangeStatus(ticketId).subscribe((data) => {
        console.log(data);
      })

      this.bookingservice.getBlockedSeats(busNum).subscribe((data) => {

        if (data.seatstatus) {
          var result = Object.keys(data.seatstatus).filter(function (key) {
            return data.seatstatus[key] == true;
          });

          console.log(result);

          result.forEach((item) => {
            this.blockedSeats.push(item);
          })

          this.blockedSeats = result;
          console.log(this.blockedSeats);
        }

        this.bookingservice.freeSeatsOnCancel(busNum, seats, this.blockedSeats).subscribe((data) => {
          console.log(data);
          this.isCancelled = true;
        })
      })
     // window.location.reload();
    }

  }
}
