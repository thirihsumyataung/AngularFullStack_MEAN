import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/services/productlist.service';
import { Product } from '../../models/product';
@Component({
  selector: 'app-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrls: ['./dashboard-products.component.css']
})
export class DashboardProductsComponent implements OnInit {

  product : Product[] = []; 
  constructor(private prodctService: ProductlistService) { }

  ngOnInit(): void {
    this.prodctService.getList().subscribe((prod) => {
      this.product = prod["products"]; 
      console.log(prod);
      console.log(this.product);
    
      })
  }
}
