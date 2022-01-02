const mongoose = require('mongoose'); 
const { User } = require('./UserSchema'); 
const Orderschema = mongoose.Schema({
    user:{
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'User', 
        required: true 
    },
    orderPlacedOn:{
        type: Date, 
        default: Date.now
    }, 
    isDelivered:{
        type: Boolean, 
        default: false 
    }, 
    orderDeliveredOn: {
        type:Date, 
        default: new Date(+new Date() + 3*24*60*60*1000)
    }, 
    cart: [{
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'Cart', 
        required: true
    }], 
    status: {
        type: String, 
        required: true, 
        default: 'Pending'
    }, 
    totalPrice: {
        type: Number
    }
}); 


Orderschema.virtual('id').get(function() {
    return this._id.toHexString(); 
}); 
Orderschema.set('toJSON', {
    virtuals: true,
}); 
const OrderItem = mongoose.model('OrderItem', Orderschema); 
module.exports= {OrderItem}; 