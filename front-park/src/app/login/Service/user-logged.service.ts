import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedService {

  private userId = new BehaviorSubject<number | null>(null);

  setUserId(id: number){
    this.userId.next(id);
  }

  getUserId(){
    return this.userId.asObservable();
  }

  constructor() { }
}
