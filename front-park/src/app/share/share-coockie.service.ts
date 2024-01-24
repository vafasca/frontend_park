import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Employee } from '../login/Models/employees.interface';

@Injectable({
  providedIn: 'root'
})
export class ShareCoockieService {

  constructor(private coockieService: CookieService) { }

  setEmployee(employee: Employee){
    this.coockieService.set('employee', JSON.stringify(employee));
    console.log("entre: "+employee.name);
  }

  getEmployee(){
    const employee = this.coockieService.get('employee');
    return employee ? JSON.parse(employee) : null;
  }

  deleteEmployee(){
    this.coockieService.delete('employee');
  }

}
