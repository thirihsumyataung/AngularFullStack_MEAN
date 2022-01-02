/***
 * Admin page : api/v1/admin/product 
 * Purpose: Admin can post, access , delete the product 
 * 
 */

const express = require('express');
const { Category } = require('../models/CategoriesSchema');
const router = express.Router(); 
require('dotenv/config'); 
const { Product } = require('../models/ProductSchema'); 


/**
* POST api/v1/admin/products 
* Purpose: Allows admin user to post the products to database
*/

router.post('/products' , async(req, res) => { 
    const category = await Category.findById(req.body.category); 
    if(!category){ 
        return res.status(400).send('Invalid Categories'); 
    }
    const newProduct = new Product({
               name: req.body.name,
               category: req.body.category, 
               price: req.body.price, 
               discountPrice: req.body.discountPrice, 
               description: req.body.description, 
               image: req.body.image, 
               createdOn: req.body.createdOn,
               isTopProduct: req.body.isTopProduct 
   }); 
   await newProduct.save(); 
   if (!newProduct){ 
       return res.status(500).send('The product cannot be created.'); 
   }
    //TO VALIDATE THE CATEGORY EXIST OR NOT 
   res.send(newProduct); 
}); 
/**
* PATCH api/v1/products/:id
* Purpose: Allows admin user to edit the specified product
*/

router.patch('/admin/products/:id',  (req, res) => {
   //We want to update the specified list (list document with id in the URL) with the new values specified in the JSON body of the request 
   Product.findOneAndUpdate({_id:req.params.id},{
       $set: req.body
   }).then(() =>{
       //res.sendStatus(200); 
       res.send({
           "status": "success", 
           "message" : "Product edited successfully"
       })
   })
});
/**
* DELETE api/vi/products/:id
* Purpose: Allow Admin user to delete the products 
*/
router.delete('/admin/products/:id', (req, res) => {
   Product.findOneAndRemove({
       _id:req.params.id, 
   }).then(() => {
       res.send({
           "status" : "success", 
           "message" : "Product deleted successfully"
       }); 
   })
}); 

module.exports = router; 