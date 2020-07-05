import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  constructor(private bookingservice: BookingService, private router: Router) {
    this.loginForm = new FormGroup({
      'email': new FormControl('', Validators.email),
      'phone': new FormControl('', Validators.minLength(10)),
      'uniqueId':new FormControl(''),
      'password': new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  sendData() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);

        this.bookingservice.loginUser(this.loginForm.value).subscribe((data) => {

        console.log(data.result)

        if (sessionStorage.length == 0) {
          sessionStorage.setItem('email', data.result.email);
          sessionStorage.setItem('name', data.result.name);
          sessionStorage.setItem('phone', data.result.phone);
          sessionStorage.setItem('dob', data.result.dob);
          window.location.reload();
          this.router.navigate(['/home']);
        }

        

      })
    }
  }



}
