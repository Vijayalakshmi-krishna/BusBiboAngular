import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userEmail;
  userName;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userEmail = sessionStorage.getItem('email');
    this.userName=sessionStorage.getItem('name');    
    this.router.navigate(['home']);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login'])
    location.reload();
  }

}
