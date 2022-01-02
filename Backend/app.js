const express = require('express'); 
const app=express(); 
const port = 3000; 
const bodyparser = require('body-parser'); 
const morgan = require('morgan'); 
const mongoose = require('mongoose');
const { Product } = require('./db/models');
require('dotenv/config'); 

const api = process.env.API_URL; 

//Middle ware 
app.use(bodyparser.json()); 
app.use(morgan('tiny')); 

//Cors on ExpressJS 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//MongoDB connection 
mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    dbName: 'finalproject'
}).then(()=> {
    console.log('Database Connection is ready ...'); 
}).catch((err) => {
    console.log(err); 
})

/**
 * GET api/v1/products
 * To get the products from homepage
 */
app.get (`${api}/homepage/products` , (req, res) => { 
     Product.find().then((productList) => {
        res.send({
            "status": "success", 
            "products": productList
        })
    }); 
}); 
app.get (`${api}/products` , (req, res) => { 
    Product.find().then((productList) => {
       res.send({
           "status": "success", 
           "products": productList
       })
   }); 
}); 

/**
 * GET api/v1/:PRODUCT_ID
 * To get the product by its ID
 */
app.get (`${api}/products/:PRODUCT_ID` , (req, res) => { 
    Product.findOne({
        _PRODUCT_ID: req.params.PRODUCT_ID
    }).then((product) => {
       res.send({
           "status": "success", 
           "products": product
       })
   }); 
}); 
/**
 * POST api/products 
 * Purpose: Allows admin user to post the products to database
 */

app.post(`${api}/admin/products` , (req, res) => { 
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
    newProduct.save().then((createdProduct) => {
        res.status(200).json(createdProduct); 
    }).catch((err) => {
        console.log(err); 
        res.status(500).json({
            error: err, 
            success: false
        }); 

    }); 
    res.send(newProduct); 
}); 
/**
 * PATCH api/v1/products/:id
 * Purpose: Allows admin user to edit the specified product
 */

 app.patch(`${api}/admin/products/:id`,  (req, res) => {
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
app.delete(`${api}/admin/products/:id`, (req, res) => {
    Product.findOneAndRemove({
        _id:req.params.id, 
    }).then(() => {
        res.send({
            "status" : "success", 
            "message" : "Product deleted successfully"
        }); 
    })
}); 
app.listen(3000, () => {
    console.log(api); 
    console.log(`API is listening on port ${port}`); 
})