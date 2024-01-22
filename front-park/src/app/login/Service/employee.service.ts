import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Models/employees.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiURI = "http://localhost:8081/api/v1/employees";
  constructor(private http: HttpClient) { }
  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiURI);
  }
}
