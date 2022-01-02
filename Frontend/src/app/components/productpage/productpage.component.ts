import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/services/productlist.service';
import { Product } from '../../models/product';
@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  product : Product[] = []; 
  constructor(private productListService: ProductlistService) { }

  //product=[{name:'Sample Name',img:"../../../assets/blank-profile-picture-973460_640.png",price:500,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]
//   addedprice =Number(this.product[2])+99.99
//   recommendedProduct =[
//     {img:"../../../assets/blank-profile-picture-973460_640.png"},
//     {img:"../../../assets/blank-profile-picture-973460_640.png"},
//     {img:"../../../assets/blank-profile-picture-973460_640.png"},
//     {img:"../../../assets/blank-profile-picture-973460_640.png"},
//     {img:"../../../assets/blank-profile-picture-973460_640.png"},
//     {img:"../../../assets/blank-profile-picture-973460_640.png"}
// ]
showDetails(){ 

}

  ngOnInit(): void {
    this.productListService.getList().subscribe((prod) => {
      this.product = prod["products"]; 
      console.log(prod);
      console.log(this.product);
      
      })
  }

  updateProduct(productid: String){ 
    
  }
  
}
