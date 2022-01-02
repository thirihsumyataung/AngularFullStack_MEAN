import { Category } from "./category";
export interface Product {
    id : String, 
    name : String, 
    category: Category, 
    price: number, 
    discountPrice:number,
    description: String, 
    image: String,
    createdOn: Date,
    isTopProduct:Boolean
}