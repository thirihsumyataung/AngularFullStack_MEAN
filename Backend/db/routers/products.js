const express = require('express');
const { MongoKerberosError } = require('mongoose/node_modules/mongodb');
const { Category } = require('../models/CategoriesSchema');
const router = express.Router(); 
const mongoose = require('mongoose'); 
require('dotenv/config'); 
const { Product } = require('../models/ProductSchema'); 

const multer = require('multer'); 

const FILE_TYPE_MAP = { 
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype]; 
    let uploadError = new Error('Invalid Image Type'); 
    if(isValid){
        uploadError = null; 
    }
      cb(uploadError, 'public/uploads')
    },
    filename: function (req, file, cb) {
        
      //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const fileName = file.originalname.split(' ').join('-'); 
      const extension = FILE_TYPE_MAP[file.mimetype]; 
      cb(null, `${fileName}-${Date.now()}.${extension}`); 
    }
  })
  
  const uploadOptions = multer({ storage: storage })

/**
 * GET api/v1/products
 * To get the products from homepage
 */
 router.get ('/homepage/products' , (req, res) => { 
     // api/v1/products?category=23456,1234565
  
    Product.find().then((productList) => {
       res.send({
           "status": "success", 
           "products": productList
       })
   }); 
}); 
router.get (`/` , async(req, res) => { 
    //If we have category --> get the product with category 
    // if there is more than one category ? we will get all queries spliting with ","" 
    //http://localhost:3000/api/v1/products?category=61ba6674b4c4a8114236a90a,61ba656c9c8d89e8039f54e2
    let filter = {}
    if (req.query.category){ 
        filter = {category: req.query.category.split(',')}
    }
   const productList = await Product.find(filter).populate('category'); 

   if(!productList){ 
       res.status(500).json({success: false, message: "There is no products to show in database.."}); 
   }
      res.status(200).send({
          "status": "success", 
          "products": productList
      }); 
}); 

/**
* GET api/v1/:PRODUCT_ID
* To get the product by its ID
*/
router.get ('/:PRODUCT_ID' , async(req, res) => { 
   const product = await Product.findById(req.params.PRODUCT_ID).populate('category'); 
   if (!product){ 
       res.status(500).json({success: false, message: `The product ID: ${req.params.PRODUCT_ID} cannot find in database.`})
   }
   
      res.status(200).send({
          "status": "success", 
          "products": product
      });
 
}); 
/**
* POST api/products 
* Purpose: Allows admin user to post the products to database
*/
// "http://localhost:3000/public/upload/image-2323232"
router.post('/',uploadOptions.single('image'), async(req, res) => { 
    //TO VALIDATE THE CATEGORY EXIST OR NOT 
    const category = await Category.findById(req.body.category); 
    if(!category){ 
        return res.status(400).send('Invalid Categories'); 
    }

    const file = req.file; 
    if(!file) {
        return res.status(400).send("No Image in category"); 
    }
    const fileName = req.file.filename; 
    const basePath = `${req.protocol}://${req.get('host')}/public/upload/`; 
    const newProduct = new Product({
               name: req.body.name,
               category: req.body.category, 
               price: req.body.price, 
               discountPrice: req.body.discountPrice, 
               description: req.body.description, 
               image: `${basePath}${fileName}`,//,"http://localhost:3000/public/upload/image-2323232"
               createdOn: req.body.createdOn,
               isTopProduct: req.body.isTopProduct 
   }); 
    await newProduct.save(); 
   if (!newProduct){ 
       return res.status(500).send('The product cannot be created.'); 
   }  
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



router.put('/:id' ,uploadOptions.single('image'), async(req, res) => { 
    if (!mongoose.isValidObjectId(req.params.id)){ 
        res.status(400).send('Invalid ID'); 
    }
    //If user didn't post anything keep the images in database

    const category = await Category.findById(req.body.category); 
    if(!category){ 
        return res.status(400).send('Invalid Categories'); 
    }
    const product = await Product.findById(req.body.category); 
    if(!product){ 
        return res.status(400).send('Invalid Categories'); 
    }
    const files = req.files;//
    let imagesPath; 

    if ( file){ 
        const fileName = req.files;
        const basePath = `${req.protocol}://${req.get('host')}/public/upload/`; 
        imagesPath=`${basePath}${fileName}`; 
    }
    else {
        imagesPath = product.image; 
    }

    const updatedProduct=  await Product.findByIdAndUpdate( 
        { _id:req.params.id}, 
        {
            name: req.body.name,
            category: req.body.category, 
            price: req.body.price, 
            discountPrice: req.body.discountPrice, 
            description: req.body.description, 
            image: imagesPath, 
            createdOn: req.body.createdOn,
            isTopProduct: req.body.isTopProduct 
        }, {
            new: true
        }
    );   
    if(!updatedProduct){ 
        return res.status(404).send(`The category of id: ${req.params.id} is updated.`); 
    }
    res.status(200).json(({
           status: "success", 
           category: updatedProduct
       })); 
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

/**
 * To know how many product items in our document
 */

router.get(`/get/count`, async(req, res) => { 
    const countProject = await Product.countDocuments(); 
    if(!countProject){ 
        res.status(500).json({success: false, message: "There is no products to show in database.."}); 
    }
       res.status(200).json({
           countProject: countProject
       }); 
 }); 
 
 router.put('/gallary-images/:id' , uploadOptions.array('images', 10),async(req, res) => { 
    if (!mongoose.isValidObjectId(req.params.id)){ 
        res.status(400).send('Invalid ID'); 
    }
    const files = req.files;
     let imagesPaths = [];
     const basePath = `${req.protocol}://${req.get('host')}/public/upload/`; 
    if(files){ 
        files.map(file => {
            imagesPaths.push(`${basePath}${file.fileName}`); 
        })
    }
     
    const product=  await Product.findByIdAndUpdate( 
        { _id:req.params.id}, 
        {
            images: imagesPaths 
        }, {
            new: true
        }
    );   
    if(!product){ 
        return res.status(404).send(`The Product cannot be updated.`); 
    }
    res.status(200).json(({
           status: "success", 
           category: product
       })); 
    
 }); 
 
module.exports = router; 