import { Component, OnInit } from '@angular/core';
//import { OrdersService } from 'src/app/services/orders.service';
import { Order } from 'src/app/models/order';
import { OrdersService } from '../../services/orders.service';
import { Cart } from 'src/app/models/cart';
@Component({
  selector: 'app-userorders',
  templateUrl: './userorders.component.html',
  styleUrls: ['./userorders.component.css']
})
export class UserordersComponent implements OnInit {

  // constructor() { }

  // order=[{orderno:1222314123212313,email:'user@example.com'},{orderno:1222314123212431,email:'newuser@example.com'}]

  // ngOnInit(): void {
  // }

  order : Order[] = []; 
  cartItem : Cart[] = []; 
  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
     this.ordersService.getUserOrderDetails("61bb033968e57dd318d5c08c").subscribe((ord: any) => {
     this.order = ord["orders"]; 
      console.log(ord);
      console.log(this.order);
      
      }); 
  }

}
