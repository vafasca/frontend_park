import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/login/Models/employees.interface';
import { Client } from '../models/clients.interface';
import { Ticket } from '../models/ticket.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiURI = "http://localhost:8081/api/v1/clients";
  private apiTicket = "http://localhost:8081/api/v1/tickets";
  constructor(private http: HttpClient) { }

  getClients():Observable<Client[]>{
    return this.http.get<Client[]>(this.apiURI);
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.apiURI, client);
  }
   
  updateClient(id: number, client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiURI}/${id}`, client);
  }

  deleteClient(id: number): Observable<Client>{
    return this.http.delete<Client>(`${this.apiURI}/${id}`);
  }

  sendTicket(ticket: Ticket): Observable<Ticket>{
    return this.http.post<Ticket>(this.apiTicket, ticket);
  }
  
}
