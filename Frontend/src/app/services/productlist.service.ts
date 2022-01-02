import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductlistService {
  productURL = 'http://localhost:3000/api/v1/products'; 
  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/v1/products'); 
  }

  getProductDetails(productId: String): Observable<any> {
    return this.http.get<any>(`${this.productURL}/${productId}`); 
  }
}
