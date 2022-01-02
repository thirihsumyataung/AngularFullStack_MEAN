/**
 *  Rourters : 
 *  
 *  Get api/v1/homepage/categories : which will get the list of 3 random products 
 *  
 *  Get api/v1/homepage/products : which will get the list of 8 random products
 * 
 * 
 */

const express = require('express');
const router = express.Router(); 
require('dotenv/config'); 
const { Product } = require('../models/ProductSchema'); 

/**
 * GET api/v1/homepage/products
 * which will get the list of 8 random products
 */
router.get ('/' , (req, res) => { 
    Product.aggregate([{$sample: {size: 8}}]).then((proList) => {
               res.send({
           "status" :"success", 
           "product" : proList
               }); 
            }); 
}); 

module.exports = router; 