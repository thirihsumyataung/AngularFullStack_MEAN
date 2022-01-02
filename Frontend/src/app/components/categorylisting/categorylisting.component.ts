import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-categorylisting',
  templateUrl: './categorylisting.component.html',
  styleUrls: ['./categorylisting.component.css']
})
export class CategorylistingComponent implements OnInit {
  categories: Category[] =[]; 
  result: Category[]= []; 

  constructor(private categoryService: CategoriesService) { }
  productList=[
    {img:"../../../assets/blank-profile-picture-973460_640.png",price:500},
    {img:"../../../assets/blank-profile-picture-973460_640.png",price:500},
    {img:"../../../assets/robot-clipart-cartoon-pencil-and-color-robot-clipart-39.png",price:500},
    {img:"../../../assets/blank-profile-picture-973460_640.png",price:500},
    {img:"../../../assets/blank-profile-picture-973460_640.png",price:500},
    {img:"../../../assets/blank-profile-picture-973460_640.png",price:500},
    {img:"../../../assets/blank-profile-picture-973460_640.png",price:500},
    {img:"../../../assets/blank-profile-picture-973460_640.png",price:500},
    {img:"../../../assets/blank-profile-picture-973460_640.png",price:500},

    ]
  category="Mobile Phones"


    
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((cate) => {
      this.categories = cate["category"]; 
      console.log(cate);
      console.log(this.categories);
      
      })}
    }
  