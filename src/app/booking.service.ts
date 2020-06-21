import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  busData;
  ticketId;

  constructor(private http: HttpClient) { }

  loginUser(data): Observable<any> {
    console.log("Inservice")
    console.log(data);
    return this.http.post('http://localhost:3000/login', data);
  }

  registerUser(data): Observable<any> {
    return this.http.post('http://localhost:3000/login/register', data);
  }

  searchbus(data): Observable<any> {
    return this.http.post('http://localhost:3000/searchbuses', data);
  }

  getBuses(): Observable<any> {
    return this.http.get('http://localhost:3000/buslist')
  }

  addbusData(data): Observable<any> {
    return this.http.post('http://localhost:3000/addbus', data);
  }

  editBusData(data): Observable<any> {
    return this.http.put('http://localhost:3000/editbus/' + data.busNum, data)
  }

  getBusInfo() {
    return this.busData;
  }
  setBusInfo(busData) {
    this.busData = busData;
  }

  setBlockedSeats(seats): Observable<any> {
    return this.http.put('http://localhost:3000/editSeats/' + this.busData.busNum + '/' + this.busData.avlSeats, seats);
  }

  getBlockedSeats(busNum): Observable<any> {
    return this.http.get('http://localhost:3000/seatstatus/' + busNum)
  }

  setTicketData(ticketData): Observable<any> {
    return this.http.post('http://localhost:3000/addticket', ticketData)
  }

  getUserTickets(email): Observable<any> {
    return this.http.get('http://localhost:3000/listtickets/' + email)
  }

  setTicketId(ticketId)
  {
    this.ticketId=ticketId;
  }

  getTIcketId()
  {
    return this.ticketId;
  }

  getTicket(ticketId)
  {
    return this.http.get('http://localhost:3000/viewticket/' + ticketId)
  }
}