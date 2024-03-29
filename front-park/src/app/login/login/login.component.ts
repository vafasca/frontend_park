import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Employee } from '../Models/employees.interface';
import { EmployeeService } from '../Service/employee.service';
import { UserLoggedService } from '../Service/user-logged.service';
import { ShareCoockieService } from 'src/app/share/share-coockie.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private employeeSvc: EmployeeService, private router: Router, private shareCookie: ShareCoockieService) { }
  employees!: Employee[];

  ngOnInit(): void {
    this.employeeSvc.getEmployees().pipe(
      tap( (employess:Employee[]) => this.employees = employess)
    ).subscribe();
  }

  send(){
    const username = (document.querySelector('input[name="uname"]') as HTMLInputElement)?.value;
    const password = (document.querySelector('input[name="psw"]') as HTMLInputElement)?.value;

    const foundEmployee = this.employees.find(employee => employee.email === username && employee.password === password);

    if (foundEmployee) {
      alert("Credenciales válidas.");
      this.shareCookie.setEmployee(foundEmployee);
      switch (foundEmployee.rol.id) {
        case 1:
          this.router.navigate(['/publicity']);
          break;
        case 2:
          this.router.navigate(['/logistics']);
          break;
        case 3:
          this.router.navigate(['/operators']);
          break;
        case 4:
          this.router.navigate(['/logistics']);
          break;
        case 5:
          this.router.navigate(['/logistics']);
          break;
        default:
          console.log("Rol no reconocido. No se pudo redirigir a ninguna ruta específica.");
      }
    } else {
      alert("Credenciales no válidas.");
    }
  }
}
