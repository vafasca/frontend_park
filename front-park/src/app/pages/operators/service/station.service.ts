import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Station } from '../models/station.interface';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  
  constructor(private http: HttpClient) { }
  private apiURI = "http://localhost:8081/api/v1/stations";

  getTicket():Observable<Station[]>{
    return this.http.get<Station[]>(this.apiURI);
  }
}
