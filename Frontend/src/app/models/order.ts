
import { User } from './user';
import { Cart } from './cart';
export interface Order {
    id: String,
    user: User,
    orderPlacedOn: Date, 
    isDelivered: Boolean, 
    orderDeliveredOn: Date, 
    cart: Cart, 
    status: String, 
    totalPrice: Number
}