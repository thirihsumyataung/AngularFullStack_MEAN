import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orderURL = 'http://localhost:3000/api/v1/orders'; 
  getUserOrder = 'http://localhost:3000/api/v1/orders/get/userorders';//61bb033968e57dd318d5c08c'; 
  constructor(private http: HttpClient) { }

  getOrderList(): Observable<any> {
    return this.http.get<any>(`${this.orderURL}`); 
  }

  getUserOrderDetails(productId: String): Observable<any> {
    return this.http.get<any>(`${this.getUserOrder}/${productId}`); 
  }
}
