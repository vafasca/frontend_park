import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/login/Models/employees.interface';
import { Client } from '../models/clients.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiURI = "http://localhost:8081/api/v1/clients";
  constructor(private http: HttpClient) { }

  getClients():Observable<Client[]>{
    return this.http.get<Client[]>(this.apiURI);
  }

  addClient(employee: Client): Observable<Client> {
    return this.http.post<Client>(this.apiURI, employee);
  }
   
}
