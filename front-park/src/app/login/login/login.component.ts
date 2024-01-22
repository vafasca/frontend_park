import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/pages/logistics/service/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private employeeSvc: EmployeeService) { }

  ngOnInit(): void {
  }

}
