import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/services/productlist.service';
import { Product } from '../../models/product';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
