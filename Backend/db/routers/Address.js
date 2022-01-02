/***
 * User Router 
 * 
 * 
 */

 const { Address } = require('../models/AddressSchema'); 
 const express = require('express'); 
 const router = express.Router(); 
 
 router.get(`/`, async(req,res)=> {
     const addressList = await Address.find(); 
 
     if(!addressList){
         res.status(500).json({success: false}); 
     }
     res.send(addressList);
 }); 
 
 router.post('/' , async(req,res) => {
     let address = new Address({
             street: req.body.street, 
             city: req.body.city, 
             state: req.body.state, 
             country: req.body.country
     }); 
     address = await address.save(); 
     if(!address){ 
         return res.status(404).send('The category cannot be created!')
     }
 
    res.send(address); 
 })
 module.exports = router; 