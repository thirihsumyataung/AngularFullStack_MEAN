const express = require('express'); 
const app=express(); 
const port = 3000; 
const bodyparser = require('body-parser'); 
const morgan = require('morgan'); 
const mongoose = require('mongoose');
// const { Product } = require('./db/models');
const cors = require('cors'); 
require('dotenv/config'); 

const productRouter = require('./db/routers/products'); 
const homepageProductRouter = require('./db/routers/homepage-products'); 
const homepageCategories = require('./db/routers/homepage-categories'); 
const categories = require('./db/routers/Category'); 
const adminRouter = require('./db/routers/AdminPage-Product'); 
const userRouter = require('./db/routers/users'); 
const addressRouter = require('./db/routers/Address')
const api = process.env.API_URL; 
const errorHandler = require('./db/helpers/error-handler'); 
const authJWT = require('./db/helpers/jwt');
const orderRouter = require('./db/routers/orders'); 
app.use(cors()); 
app.options('*', cors()); 

//Middle ware 
app.use(bodyparser.json()); 
app.use(morgan('tiny')); 
app.use(authJWT()); 
app.use(errorHandler); 
app.use('/public/upload', express.static(__dirname+'/public/upload')); 



app.use(`${api}/products`, productRouter); 
app.use(`${api}/homepage/products`, homepageProductRouter); 
app.use(`${api}/homepage/categories`, homepageCategories);
app.use(`${api}/categories`, categories );  
app.use(`${api}/users`, userRouter); 
app.use(`${api}/admin`, adminRouter); 
app.use(`${api}/profile/address`, addressRouter); 
app.use(`${api}/orders`, orderRouter); 

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


app.listen(3000, () => {
    console.log(api); 
    console.log(`API is listening on port ${port}`); 
})