import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClientService } from './service/clients.service';
import { Client } from './models/clients.interface';
import { tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from './models/ticket.interface';
import { ShareCoockieService } from 'src/app/share/share-coockie.service';
import { Employee } from 'src/app/login/Models/employees.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.css']
})
export class LogisticsComponent implements OnInit, OnDestroy {

  clients!: Client[];
  originalClients!: Client[];
  searchTerm: string;
  clientForm!: FormGroup;
  ticket!: Ticket;

  constructor(private clientSvc: ClientService, private fb: FormBuilder, private shareCookie: ShareCoockieService, private router: Router) {
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

  ngOnInit(): void {
    this.getClients();
  }
  ngOnDestroy(): void {
    
  }

  getClients(): void {
    this.clientSvc.getClients().pipe(
      tap((clients: Client[]) => { this.clients = clients; this.originalClients = this.clients; })
    ).subscribe();
  }

  handleFillClient(client: Client) {
    this.clientForm.setValue({
      name: client.name,
      ci: client.ci,
      email: client.email,
      phone: client.phone,
      age: client.age,
      height: client.height
    });
  }

  deleteClient(id: number): void {
    this.clientSvc.deleteClient(id).subscribe();
    this.updateClients();
  }

  addNewClient(): void {
    if (this.clientForm.valid) {
      const newClient = this.clientForm.value;
      const existingClient = this.clients.find(client => client.ci === newClient.ci);
      if (existingClient) {
        this.clientSvc.updateClient(existingClient.id, newClient).subscribe(res => {
          const employee: Employee = this.shareCookie.getEmployee();
          this.ticket = ({
            status: true,
            employee: employee,
            client: existingClient
          })
          this.clientSvc.sendTicket(this.ticket).subscribe();
          alert('Cliente actualizado');
          this.updateClients();
        });
      } else {
        this.clientSvc.addClient(newClient).subscribe(client => {
          const employee: Employee = this.shareCookie.getEmployee();
          this.ticket = ({
            employee: employee,
            client: client,
            status: true
          })
          this.clientSvc.sendTicket(this.ticket).subscribe();
          alert('Cliente registrado');
          this.updateClients();
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

  logout(): void {
    this.shareCookie.deleteEmployee();
    this.router.navigate(['']);
  }
}
