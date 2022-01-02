
import { Address } from './address';
export interface User { 
    id: String,
    firstname: String,
    lastname:String,
    email: String,
    passwordHash: String,
    address : Address, 
    createdOn: Date, 
    isAdmin: Boolean
}