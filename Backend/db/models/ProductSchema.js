/**
 * Create the Schema for product
 */
const { ObjectId } = require('bson');
const mongoose = require ('mongoose'); 
const {Category} = require('./CategoriesSchema'); 
const ProductSchema = mongoose.Schema({
            name: {
                type: String, 
                required: true
            },
            category: {
                type: mongoose.SchemaTypes.ObjectId, 
                ref: 'Category', 
                required: true
            }, 
            price:  {
                type: Number, 
                required: true
            }, 
            discountPrice:  {
                type: Number
            }, 
            description:  {
                type: String, 
                required: true
            },  
            image: {
                type: String
            }, 
            images: [{
                type: String
            }],
            createdOn: {
                type: Date, 
                default: Date.now
            }, 
            isTopProduct:{
                type: Boolean, 
                default: false
            }
 })

 ProductSchema.virtual('id').get(function() {
     return this._id.toHexString(); 
 })
 ProductSchema.set('toJSON', {
     virtuals: true,
 }); 
const Product = mongoose.model('Product', ProductSchema); 
module.exports= {Product}; 


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