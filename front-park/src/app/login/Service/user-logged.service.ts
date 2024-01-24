import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Employee } from '../Models/employees.interface';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedService {

  private userId = new BehaviorSubject<Employee | null>(null);

  setUser(user: Employee){
    this.userId.next(user);
  }

  getUser(){
    return this.userId.asObservable();
  }

  constructor() { }
}
