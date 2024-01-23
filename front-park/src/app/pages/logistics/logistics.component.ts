import { Component, OnInit } from '@angular/core';
import { ClientService } from './service/clients.service';
import { Client } from './models/clients.interface';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.css']
})
export class LogisticsComponent implements OnInit {

  clients!: Client[];
  originalClients!: Client[];
  searchTerm: string;
  constructor(private clientSvc: ClientService) {
    this.searchTerm = "";
   }

   searchEntity(){
    console.log(this.searchTerm);
    if (this.searchTerm === "") {
      this.clients = [...this.originalClients];
    } else {
      this.clients = this.originalClients.filter(client => client.name.toLowerCase().startsWith(this.searchTerm.toLowerCase()));
    }
  }
  

  ngOnInit(): void {
    this.clientSvc.getEmployees().pipe(
      tap((clients: Client[]) => {this.clients = clients; this.originalClients = this.clients;})
    ).subscribe();
  }
  editEmployee(){

  }

  deleteEmployee(){

  }

  addNewEmployee(){

  }

  searchEmployees(){

  }

  createEmployee(){

  }
}
