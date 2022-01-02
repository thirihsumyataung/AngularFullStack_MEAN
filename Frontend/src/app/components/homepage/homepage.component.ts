import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
products: { id: number; price: number;image: string; }[];

  constructor() { 
    this.products = [

      {
  
  
        id : 1,
        price : 100,
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAwDxKXFriI1BknUt10U8cfRVh-pL-PI8zPBtXuZ45jLy5Q4awmeU7kfOxPQCByfksTE&usqp=CAU'
      },
  
      {
  
        id : 2,
        price : 300,
         image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAwDxKXFriI1BknUt10U8cfRVh-pL-PI8zPBtXuZ45jLy5Q4awmeU7kfOxPQCByfksTE&usqp=CAU',

  
      },
  
      {
  
        id : 3,
        price : 200,
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAwDxKXFriI1BknUt10U8cfRVh-pL-PI8zPBtXuZ45jLy5Q4awmeU7kfOxPQCByfksTE&usqp=CAU'
  
      },
      {
  
        id : 3,
        price : 200,
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAwDxKXFriI1BknUt10U8cfRVh-pL-PI8zPBtXuZ45jLy5Q4awmeU7kfOxPQCByfksTE&usqp=CAU'
  
      },
      {
  
        id : 3,
        price : 200,
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAwDxKXFriI1BknUt10U8cfRVh-pL-PI8zPBtXuZ45jLy5Q4awmeU7kfOxPQCByfksTE&usqp=CAU'
  
      },
      {
  
        id : 3,
        price : 200,
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAwDxKXFriI1BknUt10U8cfRVh-pL-PI8zPBtXuZ45jLy5Q4awmeU7kfOxPQCByfksTE&usqp=CAU'
  
      },
      {
  
        id : 3,
        price : 200,
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAwDxKXFriI1BknUt10U8cfRVh-pL-PI8zPBtXuZ45jLy5Q4awmeU7kfOxPQCByfksTE&usqp=CAU'
  
      }, {
  
        id : 3,
        price : 200,
        image : 'https://netrinoimages.s3.eu-west-2.amazonaws.com/2017/07/29/462024/261646/apple_airpods_pro_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2747852_o.jpg'
  
      }
  
         ]
  }

  ngOnInit(): void {
  }

}
