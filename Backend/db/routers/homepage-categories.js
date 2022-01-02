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
const { Category } = require('../models/CategoriesSchema');
 const router = express.Router(); 
 require('dotenv/config'); 
 const { Product } = require('../models/ProductSchema'); 
 
 /**
  * GET api/v1/homepage/products
  * which will get the list of 8 random products
  */
 
 router.get ('/' , async(req, res) => { 

  const categoryRandom = await Category.aggregate([
    //{$project: {name: "$name"}},
    {$project: {"name": 1, _id:0}}, 
    {$sample: {size: 3}}]); 
    res.status(200).json({
            status :"success", 
            category : categoryRandom
                }); 
               
             });
               
 
 module.exports = router; 