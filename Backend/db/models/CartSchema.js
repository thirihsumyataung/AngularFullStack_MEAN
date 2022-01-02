const mongoose = require ('mongoose'); 

const CartSchema = mongoose.Schema({
    
    product: {
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'Product'
    }, 
   quantity: {
       type: Number, 
       default: 2
   },
}); 

 
CartSchema.virtual('id').get(function() {
    return this._id.toHexString(); 
}); 
CartSchema.set('toJSON', {
    virtuals: true,
}); 
const Cart = mongoose.model('Cart', CartSchema); 
module.exports= {Cart}; 
