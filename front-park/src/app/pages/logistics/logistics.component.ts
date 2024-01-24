import { Component, OnInit } from '@angular/core';
import { ClientService } from './service/clients.service';
import { Client } from './models/clients.interface';
import { tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from './models/ticket.interface';
import { UserLoggedService } from 'src/app/login/Service/user-logged.service';

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.css']
})
export class LogisticsComponent implements OnInit {

  clients!: Client[];
  originalClients!: Client[];
  searchTerm: string;
  clientForm!: FormGroup;
  ticket!: Ticket;
  constructor(private clientSvc: ClientService, private fb:FormBuilder, private userId: UserLoggedService) {
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
    this.getClients();
  }

  getClients(): void{
    this.clientSvc.getClients().pipe(
      tap((clients: Client[]) => {this.clients = clients; this.originalClients = this.clients;})
    ).subscribe();
  }

  fillClient(client: Client){
    this.clientForm.setValue({
      name: client.name,
      ci: client.ci,
      email: client.email,
      phone: client.phone,
      age: client.age,
      height: client.height
    });
  }

  deleteClient(id: number): void{
    this.clientSvc.deleteClient(id).subscribe();
    //location.reload();
  }

  addNewClient(): void {
    if (this.clientForm.valid) {
      const newClient = this.clientForm.value;
      const existingClient = this.clients.find(client => client.ci === newClient.ci);
      if (existingClient) {
        this.clientSvc.updateClient(existingClient.id, newClient).subscribe(res => {

          this.userId.getUser().subscribe(user => {
            console.log(JSON.stringify(user, null, 2));
            console.log(JSON.stringify(user, null, 2));

            if(user !== null){
              this.ticket = ({
                idEmployee: user,
                idClient: newClient,
                status: true
              })
            }          
            ;})

          this.clientSvc.sendTicket(this.ticket).subscribe();
          alert('Cliente actualizado');
          //location.reload();
        });
      } else {
        this.clientSvc.addClient(newClient).subscribe(res => {
          alert('Cliente registrado');
          //location.reload();
        });
      }
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
}
