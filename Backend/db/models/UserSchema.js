/**
 * Create the Schema for product
 */
 const { ObjectId } = require('bson');
 const mongoose = require ('mongoose'); 
 const UserSchema = mongoose.Schema({
             firstname: {
                 type: String, 
                 required: true
             },
             lastname: {
                type: String, 
                required: true
            },email: {
                 type: String, 
                 required: true
             },
            passwordHash: {
                type: String, 
                required: true
            },
              
             address : {
              type: mongoose.SchemaTypes.ObjectId,
              ref : 'Address' , 
              required: true
                }, 
             
             createdOn: {
                 type: Date, 
                 default: Date.now
             }, 
             isAdmin:{
                 type: Boolean, 
                 default: false
             }
  })
 
  UserSchema.virtual('id').get(function() {
      return this._id.toHexString(); 
  })
  UserSchema.set('toJSON', {
      virtuals: true,
  }); 
 const User = mongoose.model('User', UserSchema); 
 module.exports= {User}; 
 
 
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