import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Promotion } from '../../logistics/models/promotion.interface';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  private apiURI = "http://localhost:8081/api/v1/promotions";
  constructor(private http: HttpClient) { }

  getPromotions():Observable<Promotion[]>{
    return this.http.get<Promotion[]>(this.apiURI);
  }

  addPromotion(promotion: Promotion):Observable<Promotion>{
    return this.http.post<Promotion>(this.apiURI, promotion);
  }

  deletePromotion(id: number): Observable<Promotion>{
    return this.http.delete<Promotion>(`${this.apiURI}/${id}`);
  }

  updatePromotion(id: number, promotion: Promotion): Observable<Promotion> {
    return this.http.put<Promotion>(`${this.apiURI}/${id}`, promotion);
  }
}
