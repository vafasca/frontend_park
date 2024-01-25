import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Client } from 'src/app/pages/logistics/models/clients.interface';
import { ClientService } from 'src/app/pages/logistics/service/clients.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  @Input() clients!: Client[];
  @Output() fillClientEvent = new EventEmitter<Client>();
  searchTerm: string;
  originalClients!: Client[];


  constructor(private clientSvc: ClientService) {
    this.searchTerm = "";
  }

  ngOnInit(): void {
    this.getClients();
  }
  
  filterClients(): Client[] {
    const searchTermLowerCase = this.searchTerm.toLowerCase();
  
    return this.clients ? this.clients.filter(client =>
      client.name.toLowerCase().includes(searchTermLowerCase) ||
      client.ci.toLowerCase().includes(searchTermLowerCase)
    ) : [];
  }
  
  fillClient(client: Client) {
    this.fillClientEvent.emit(client);
  }

  getClients(): void {
    this.clientSvc.getClients().pipe(
      tap((clients: Client[]) => { this.clients = clients; this.originalClients = this.clients; })
    ).subscribe();
  }
}
