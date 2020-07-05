import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  allBuses;
 
  userEmail;
  constructor(private bookingservice:BookingService) { }

  ngOnInit(): void {

    this.bookingservice.getBuses().subscribe((data)=>{
      this.allBuses=data;
    })
    this.userEmail=sessionStorage.getItem('email');

  }

  approve(busNum)
  {
    if (this.userEmail == 'admin@gmail.com')
    {
     
      this.bookingservice.approvebus(busNum).subscribe((data)=>{
        console.log(data);
        if(data.message =='Approved Bus Data')
          {
            location.reload();
          }
      })
    }  
    
  }

  reject(busNum)
  {
    if (this.userEmail == 'admin@gmail.com')
    {
        this.bookingservice.rejectbus(busNum).subscribe((data)=>{
          console.log(data);
          
        })
    }
  }

}
