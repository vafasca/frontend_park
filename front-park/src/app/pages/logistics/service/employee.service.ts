import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiURI = "http://localhost:8081/api/v1/clients";
  constructor(private http: HttpClient) { }

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiURI);
  }
}
