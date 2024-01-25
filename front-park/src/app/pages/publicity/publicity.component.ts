import { Component, OnInit } from '@angular/core';
import { ClientService } from '../logistics/service/clients.service';
import { Client } from '../logistics/models/clients.interface';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-publicity',
  templateUrl: './publicity.component.html',
  styleUrls: ['./publicity.component.css']
})
export class PublicityComponent implements OnInit {

  // clients!: Client[];
  // originalClients!: Client[];

  constructor(private clientSvc: ClientService) { }

  ngOnInit(): void {
   // this.getClients();
  }

  // getClients(): void {
  //   this.clientSvc.getClients().pipe(
  //     tap((clients: Client[]) => { this.clients = clients; this.originalClients = this.clients; })
  //   ).subscribe();
  // }

}
