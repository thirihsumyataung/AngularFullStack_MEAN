import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userURL = 'http://localhost:3000/api/v1/users'; 
  constructor(private http: HttpClient) { }

  getUserList(): Observable<any> {
    return this.http.get<any>(`${this.userURL}`); 
  }

  // getUserOrderDetails(productId: String): Observable<any> {
  //   return this.http.get<any>(`${this.getUserOrder}/${productId}`); 
  // }
}
