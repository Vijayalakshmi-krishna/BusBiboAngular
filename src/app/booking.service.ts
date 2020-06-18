import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  busData;

  constructor(private http:HttpClient) { }

  loginUser(data):Observable<any>
  {
    console.log("Inservice")
    console.log(data);
    return this.http.post('http://localhost:3000/login',data);
  }

  registerUser(data):Observable<any>
  {
    return this.http.post('http://localhost:3000/login/register',data);
  }

  getbusData(data):Observable<any>
  {
    return this.http.post('http://localhost:3000/buslist',data);
  }

  addbusData(data):Observable<any>
  {
    return this.http.post('http://localhost:3000/addbus',data);
  }

  getBusInfo()
  {
    return this.busData;
  }
  setBusInfo(busData)
  {
    this.busData=busData;
  }

  setBlockedSeats(seats):Observable<any>
  {
    return this.http.put('http://localhost:3000/editSeats/'+this.busData.busNum,seats);
  }

  getBlockedSeats(busNum):Observable<any>
  {
    return this.http.get('http://localhost:3000/seatstatus/' + busNum)
  }
}
