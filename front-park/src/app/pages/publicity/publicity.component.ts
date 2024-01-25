import { Component, OnInit } from '@angular/core';
import { ClientService } from '../logistics/service/clients.service';
import { Client } from '../logistics/models/clients.interface';
import { tap } from 'rxjs/operators';
import { PromotionService } from './service/promotion.service';
import { Promotion } from '../logistics/models/promotion.interface';

@Component({
  selector: 'app-publicity',
  templateUrl: './publicity.component.html',
  styleUrls: ['./publicity.component.css']
})
export class PublicityComponent implements OnInit {
  promotion!: Promotion[];

  constructor(private promotionSvc: PromotionService) { }

  ngOnInit(): void {
   this.getPromotion();
  }

  getPromotion(){
    this.promotionSvc.getPromotions().subscribe((promotions: Promotion[]) => {
      this.promotion = promotions;
      console.log(JSON.stringify(this.promotion));
    });
  }

}
