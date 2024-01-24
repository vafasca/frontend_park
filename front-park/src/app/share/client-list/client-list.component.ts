import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from 'src/app/pages/logistics/models/clients.interface';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  @Input() clients!: Client[];
  @Output() fillClientEvent = new EventEmitter<Client>();
  searchTerm: string;


  constructor() {
    this.searchTerm = "";
  }

  ngOnInit(): void {
      
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
}
