import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {
  seatId;
  //seatStatus: boolean = false;
  isBookingSuccess:boolean=false;
  isUserLoggedIn:boolean=false;
  isConfirmClicked:boolean=false;
  occupiedSeats = [];
  selSeatArray = [];
  bookedSeats = [];
  bookSeatsDisp=[];
  busInfo;
  userName;
  userEmail;
  userPhone;
  bookSeats: string = "";
  changeseatStatus = [];
  isMakePayment: boolean = false;
  constructor(private bookingservice: BookingService) { }

  ngOnInit(): void {
    this.busInfo = this.bookingservice.getBusInfo()
    if (this.busInfo) {
      console.log(this.busInfo);
      this.bookingservice.getBlockedSeats(this.busInfo.busNum).subscribe((data) => {

        console.log(data);

        var result = Object.keys(data.seatstatus).filter(function (key) {
          return data.seatstatus[key] == true;
        });

        console.log(result);
        result.forEach((item) => {
          this.occupiedSeats.push(item);
        })

        this.bookedSeats = result;

      })
    }
    this.userName = sessionStorage.getItem('name');
    this.userEmail = sessionStorage.getItem('email');
    this.userPhone = sessionStorage.getItem('phone');
  }

  selSeat(event) {

    var target = event.target;
    var id = target.attributes.id;
    this.seatId = id.nodeValue;
    console.log(this.seatId);
    if (!(this.selSeatArray.includes(this.seatId))) {
      this.selSeatArray.push(this.seatId)
    }
    else {
      var removeseat = this.selSeatArray.indexOf(this.seatId);
      this.selSeatArray.splice(removeseat, 1);
    }

  }

  confirmSeats() {
    this.isUserLoggedIn=this.userEmail != "" ? true:false;
    this.isConfirmClicked=true;
    this.bookSeats = "";
    this.selSeatArray.forEach((item) => {
      if (!this.occupiedSeats.includes(item)) {
        this.occupiedSeats.push(item)
      }
    })

    this.isMakePayment = true;
    this.occupiedSeats.forEach((item) => {
      if (!this.bookedSeats.includes(item)) {
        this.bookSeatsDisp.push(item);
      }
    })

    this.bookSeats=this.bookSeatsDisp.join(',')
  }

  makePayment() {

    if (this.userEmail) {
      this.bookingservice.setBlockedSeats(this.occupiedSeats).subscribe((data) => {

        console.log(data.message);
        if (data.message == "Seats Updated") {
          this.isBookingSuccess=true;
        }
      })
    }

  }


}
