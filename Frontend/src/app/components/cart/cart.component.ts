import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  

  constructor() { }

  cart=[{name:'Test Product 1', quantity:1, price:1000},{name:'Test Product 2', quantity:2, price:100},{name:'Test Product 3', quantity:1, price:1000}];
  total=1000

  ngOnInit(): void {
  }

}
