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

    return this.http.post('https://bus-zone.herokuapp.com/login', data);
    
  }

  registerUser(data): Observable<any> {
    return this.http.post('https://bus-zone.herokuapp.com/register', data);
  }

  editUserData(data):Observable<any>
  {
    var email=sessionStorage.email
    return this.http.put('https://bus-zone.herokuapp.com/edituser/'+ email, data)
  }

  searchbus(data): Observable<any> {
    return this.http.post('https://bus-zone.herokuapp.com/searchbuses', data);
  }

  getBuses(): Observable<any> {
    return this.http.get('https://bus-zone.herokuapp.com/buslist')
  }

  addbusData(data): Observable<any> {
    return this.http.post('https://bus-zone.herokuapp.com/addbus', data);
  }

  editBusData(data): Observable<any> {
    return this.http.put('https://bus-zone.herokuapp.com/editbus/' + data.busNum, data)
  }

  getBusInfo() {
    return this.busData;
  }
  setBusInfo(busData) {
    this.busData = busData;
  }

  setBlockedSeats(seats): Observable<any> {
    return this.http.put('https://bus-zone.herokuapp.com/editSeats/' + this.busData.busNum + '/' + this.busData.avlSeats, seats);
  }

  getBlockedSeats(busNum): Observable<any> {
    return this.http.get('https://bus-zone.herokuapp.com/seatstatus/' + busNum)
  }

  setTicketData(ticketData): Observable<any> {
    return this.http.post('https://bus-zone.herokuapp.com/addticket', ticketData)
  }

  getUserTickets(email): Observable<any> {
    return this.http.get('https://bus-zone.herokuapp.com/listtickets/' + email)
  }

  setTicketId(ticketId)
  {
    this.ticketId=ticketId;
  }

  getTIcketId()
  {
    return this.ticketId;
  }

  getTicket(ticketId): Observable<any>
  {
    return this.http.get('https://bus-zone.herokuapp.com/viewticket/' + ticketId)
  }

  ChangeStatus(ticketId): Observable<any>
  {
    return this.http.put('https://bus-zone.herokuapp.com/cancelticket/'+ticketId,ticketId)
  }

  freeSeatsOnCancel(busNum,seats,blockedseats): Observable<any>
  {
    
    return this.http.put('https://bus-zone.herokuapp.com/freeseats/'+busNum+'/' + seats,blockedseats)
  }

  approvebus(busNum): Observable<any>
  {
    return this.http.put('https://bus-zone.herokuapp.com/approvebus/'+busNum,busNum);
  }

  rejectbus(busNum): Observable<any>
  {
    return this.http.put('https://bus-zone.herokuapp.com/rejectbus/' + busNum,busNum)
  }
}