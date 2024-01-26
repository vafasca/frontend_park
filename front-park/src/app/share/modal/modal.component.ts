import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ticket } from 'src/app/pages/logistics/models/ticket.interface';
import { TicketService } from 'src/app/pages/logistics/service/ticket.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  ticketsData!: Ticket[];
  @Input() items!: any[];

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private ticketService: TicketService) { }

  ngOnInit(): void {
    this.ticketService.getTicket(this.data.id).subscribe((ticket: Ticket[]) => {
      this.ticketsData = ticket;
    });
  }

  getIdClient(){

  }

  cerrarModal(): void {
    this.dialogRef.close();
  }
}
