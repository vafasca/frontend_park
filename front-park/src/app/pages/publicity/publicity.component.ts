import { Component, OnInit } from '@angular/core';
import { PromotionService } from './service/promotion.service';
import { Promotion } from '../logistics/models/promotion.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../logistics/models/clients.interface';
import { ClientService } from '../logistics/service/clients.service';
import { TicketService } from '../logistics/service/ticket.service';
import { Ticket } from '../logistics/models/ticket.interface';
import { Employee } from 'src/app/login/Models/employees.interface';
import { ShareCoockieService } from 'src/app/share/share-coockie.service';

@Component({
  selector: 'app-publicity',
  templateUrl: './publicity.component.html',
  styleUrls: ['./publicity.component.css']
})
export class PublicityComponent implements OnInit {
  promotions!: Promotion[];
  promotionForm!: FormGroup;
  client!: Client;
  promotion!: Promotion;
  ticket!: Ticket;

  constructor(private promotionSvc: PromotionService, private fb: FormBuilder, private clientSvc: ClientService, private ticketSvc: TicketService, private shareCookie: ShareCoockieService) { 
    this.promotionForm = this.fb.group({
      description: ['', Validators.required],
      nameDescription: ['', Validators.required],
      percentageDiscount: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
   this.getPromotion();
  }

  getPromotion(){
    this.promotionSvc.getPromotions().subscribe((promotions: Promotion[]) => {
      this.promotions = promotions;
    });
  }

  addNewPromotion(): void{
    if(this.promotionForm.valid){
      const newPromotion = this.promotionForm.value;
      this.promotionSvc.addPromotion(newPromotion).subscribe();
      alert("Promocion Registrada");
      this.getPromotion();
    }

  }

  printToConsole(promotion: Promotion) {
    this.promotion = promotion;
  }

  datos(client: Client){
    this.client = client;
  }

  adjuntar(){
    const client: Client = this.client;
    const promotion: Promotion = this.promotion;
    client.promotion = promotion;
    const employee: Employee = this.shareCookie.getEmployee();
    this.clientSvc.updateClient(client.id, client).subscribe();
    alert("Asignado promocion "+promotion.nameDescription+" al cliente: "+client.name);
  }

  editPromotion() {
    if (this.promotionForm.valid) {
      const newPromotion = this.promotionForm.value;
      const existingPromotionIndex = this.promotions.findIndex(promotion => promotion.nameDescription === newPromotion.nameDescription);
      if (existingPromotionIndex !== -1) {
        const existingPromotion = this.promotions[existingPromotionIndex];
        this.promotionSvc.updatePromotion(existingPromotion.id, newPromotion).subscribe(res => {
          alert('Promoción actualizada');
          this.getPromotion();
          this.promotions[existingPromotionIndex] = newPromotion;
        });
      }
    }
  }
  

  fillForm(promotion: Promotion): void {
    this.promotionForm.setValue({
      description: promotion.description,
      nameDescription: promotion.nameDescription,
      percentageDiscount: promotion.percentageDiscount
    });
  }

}
