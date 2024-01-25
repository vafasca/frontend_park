import { Component, OnInit } from '@angular/core';
import { PromotionService } from './service/promotion.service';
import { Promotion } from '../logistics/models/promotion.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../logistics/models/clients.interface';
import { ClientService } from '../logistics/service/clients.service';

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

  constructor(private promotionSvc: PromotionService, private fb: FormBuilder, private clientSvc: ClientService) { 
    this.promotionForm = this.fb.group({
      description: ['', Validators.required],
      nameDescription: ['', Validators.required],
      percentageDiscount: ['', [Validators.required, Validators.email]]
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
    const newPromotion = this.promotionForm.value;
    this.promotionSvc.addPromotion(newPromotion).subscribe();
    alert("Promocion Registrada");
    this.getPromotion();
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
  this.clientSvc.updateClient(1, client);
}

}
