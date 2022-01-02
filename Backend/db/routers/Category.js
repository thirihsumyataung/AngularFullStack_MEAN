const { Category } = require('../models/CategoriesSchema'); 
const express = require('express');
const router = express.Router(); 
require('dotenv/config'); 

router.get ('/' , async(req, res) => { 
    const categoryList=  await Category.find();   
    if(!categoryList){ 
        return res.status(404).send('The category cannot be found!')
    }
    res.status(200).send(({
           "status": "success", 
           "category": categoryList
       })); 
 }); 
 router.get ('/:id' , async(req, res) => { 
    const categoryList=  await Category.findById({ 
        _id: req.params.id
    });   
    if(!categoryList){ 
        return res.status(404).send(`The category of id: ${req.params.id}cannot be found!`); 
    }
    res.status(200).send(({
           "status": "success", 
           "category": categoryList
       })); 
 }); 

 router.put('/:id' , async(req, res) => { 
    const categoryList=  await Category.findByIdAndUpdate( 
        { _id:req.params.id}, 
        {
            $set: req.body
        }, {
            new: true
        }
    );   
    if(!categoryList){ 
        return res.status(404).send(`The category of id: ${req.params.id} is updated.`); 
    }
    res.status(200).send(({
           "status": "success", 
           "category": categoryList
       })); 
 }); 

 router.post('/' , async(req,res) => {
     let category = new Category({
         name: req.body.name
     }); 
     category = await category.save(); 
     if(!category){ 
         return res.status(404).send('The category cannot be created!')
     }

    res.send(category); 
 })
 router.delete('/:id', (req, res) => {
     Category.findByIdAndRemove({
         _id: req.params.id
     }).then(category => {
         if(category){ 
             return res.status(200).json({success: true, message: `The category for id: ${req.params.id} is deleted`}); 
         }
         else { 
             return res.status(404).json({success: false, message: "Category not found"}); 
         }
     }).catch(err=>{
        return res.status(400).json({success: false, error: err}); 
     }); 
 })

module.exports = router; 