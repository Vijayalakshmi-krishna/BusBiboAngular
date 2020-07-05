import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;
  regUserData;
  isEmailExists: boolean = false;
  constructor(private bookingservice: BookingService, private router: Router) {
    this.registerForm = new FormGroup({
      'dob': new FormControl(''),
      'name': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.email, Validators.required]),
      'phone': new FormControl('', Validators.minLength(10)),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])


    })

  }

  ngOnInit(): void {

  }

  SendData() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.bookingservice.registerUser(this.registerForm.value).subscribe((data) => {
        this.regUserData = data;
        console.log(this.regUserData)
        console.log(this.regUserData.Message)
        if (this.regUserData.Message == "Email Already exists") {
          this.isEmailExists = true;
        }
        else
        {
          this.router.navigate(['/login']);
        }
       
      })
    }
  }

}
