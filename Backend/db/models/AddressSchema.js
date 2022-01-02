/**
 * Create the Schema for product
 */
 const { ObjectId } = require('bson');
 const mongoose = require ('mongoose'); 
 const AddressSchema = mongoose.Schema({
                street:  {
                    type: String, 
                    required: true
                }, 
                city:  {
                    type: String, 
                    required: true
                },  
                state: {
                 type: String, 
                 required: true
                }, 
                country: {
                    type: String, 
                    required: true
                   }             
        
  })
 
  AddressSchema.virtual('id').get(function() {
      return this._id.toHexString(); 
  })
  AddressSchema.set('toJSON', {
      virtuals: true,
  }); 
 const Address = mongoose.model('Address', AddressSchema); 
 module.exports= {Address}; 
 
 
 /***
  * To make it more frontend friendly id 
  */
 
 /***
  * productSchema.
  * 
  * 
  * 
  * 
  */