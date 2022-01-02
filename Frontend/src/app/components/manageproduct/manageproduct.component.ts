import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.css']
})
export class ManageproductComponent implements OnInit {
products: { id: number; price: number; productname: string; image: string; }[] ;
  isPopupOpened: any;
  submitted = false;

  editproductForm:FormGroup;

  constructor(private formbuilder: FormBuilder) { 
    

    this.products = [

      {
  
  
        id : 1,
        price : 100,
        productname:'1XSmartPhone',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAwDxKXFriI1BknUt10U8cfRVh-pL-PI8zPBtXuZ45jLy5Q4awmeU7kfOxPQCByfksTE&usqp=CAU'
      },
  
      {
  
        id : 2,
        price : 300,
        productname:'1XSmartPhone',

         image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAwDxKXFriI1BknUt10U8cfRVh-pL-PI8zPBtXuZ45jLy5Q4awmeU7kfOxPQCByfksTE&usqp=CAU',

  
      },
  
      {
  
        id : 3,
        price : 200,
        productname:'1XSmartPhone',

        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAwDxKXFriI1BknUt10U8cfRVh-pL-PI8zPBtXuZ45jLy5Q4awmeU7kfOxPQCByfksTE&usqp=CAU'
  
      },
      {
  
        id : 3,
        price : 200,
        productname:'1XSmartPhone',

        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAwDxKXFriI1BknUt10U8cfRVh-pL-PI8zPBtXuZ45jLy5Q4awmeU7kfOxPQCByfksTE&usqp=CAU'
  
      },
      {
  
        id : 3,
        price : 200,
        productname:'1XSmartPhone',

        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAwDxKXFriI1BknUt10U8cfRVh-pL-PI8zPBtXuZ45jLy5Q4awmeU7kfOxPQCByfksTE&usqp=CAU'
  
      },
      {
  
        id : 3,
        price : 200,
        productname:'1XSmartPhone',

        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAwDxKXFriI1BknUt10U8cfRVh-pL-PI8zPBtXuZ45jLy5Q4awmeU7kfOxPQCByfksTE&usqp=CAU'
  
      },
      {
  
        id : 3,
        price : 200,
        productname:'1XSmartPhone',

        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAwDxKXFriI1BknUt10U8cfRVh-pL-PI8zPBtXuZ45jLy5Q4awmeU7kfOxPQCByfksTE&usqp=CAU'
  
      }, {
  
        id : 3,
        price : 200,
        productname:'1XSmartPhone',

        image : 'https://netrinoimages.s3.eu-west-2.amazonaws.com/2017/07/29/462024/261646/apple_airpods_pro_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2747852_o.jpg'
  
      }
  
         ]

         this.editproductForm = this.formbuilder.group({
      
          productname: ['',[ Validators.required,Validators.maxLength(64)]],
    
          department: ['', Validators.required],
          price: ['', Validators.required],
          discount: ['', Validators.required],
    
          productimg: ['', Validators.required],
          productdesc: ['',[ Validators.required,Validators.minLength(20)]],
          terms: ['', Validators.required]
    
        },
       
        )
    

        
  }
  ngOnInit(): void {
  }
  delete(item:Product){
console.log(item.id)
  }
  
  edit() {
    this.submitted=true;
    console.log(this.editproductForm);
  }
  get f() {
    return this.editproductForm.controls;
  }
 
  
}
