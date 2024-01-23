import { Component, OnInit } from '@angular/core';
import { ClientService } from './service/clients.service';
import { Client } from './models/clients.interface';
import { tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.css']
})
export class LogisticsComponent implements OnInit {

  clients!: Client[];
  client!: Client;
  originalClients!: Client[];
  searchTerm: string;
  clientForm!: FormGroup;
  constructor(private clientSvc: ClientService, private fb:FormBuilder) {
    this.searchTerm = "";
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      ci: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      age: ['', Validators.required],
      height: ['', Validators.required]
    });
  
   }

   searchEntity() {
    console.log(this.searchTerm);
    if (this.searchTerm === "") {
      this.clients = [...this.originalClients];
    } else {
      this.clients = this.originalClients.filter(client => 
        client.name.toLowerCase().startsWith(this.searchTerm.toLowerCase()) ||
        client.ci.toLowerCase().startsWith(this.searchTerm.toLowerCase())
      );
    }
  }
  
  ngOnInit(): void {
    this.clientSvc.getClients().pipe(
      tap((clients: Client[]) => {this.clients = clients; this.originalClients = this.clients;})
    ).subscribe();
  }
  editClient(){
    console.log("editando")
  }

  deleteEmployee(){

  }

  addNewClient(): void{
    if(this.clientForm.valid){
        this.clientSvc.addClient(this.clientForm.value).subscribe(res => {console.log(res);alert("Cliente Registrado"); this.updateClients();})
    }
  }

  updateClients(): void {
    this.clientSvc.getClients().pipe(
      tap((clients: Client[]) => {
        this.clients = clients;
        this.originalClients = [...this.clients];
      })
    ).subscribe();
  }

  searchEmployees(){

  }

  createEmployee(){

  }
}
