import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  private apiURI = "http://localhost:8081/api/v1/tickets";
  private apiURI2 = "http://localhost:8081/api/v1/tickets/frecuency";

  addTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.apiURI, ticket);
  }

  getTicket(id: number): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(`${this.apiURI2}/${id}`);
  }
}
