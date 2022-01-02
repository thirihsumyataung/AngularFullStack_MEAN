/***
 * API for orders 
 * 
 * 
 * 
 */

const express = require('express');
const router = express.Router(); 
const { OrderItem } = require('../models/OrderSchema'); 
const { Cart } = require('../models/CartSchema'); 
const { User } = require('../models/UserSchema');
require('dotenv/config'); 

router.get ('/' , async(req, res) => { 
    const orderList=  await OrderItem.find().populate('user cart').select('email address isDelivered');   
    if(!orderList){ 
        return res.status(404).send('Your order cannot be found!')
    }
    res.status(200).json({
        status: "success", 
        orders :  orderList, 
     });
 }); 

 /***
 * Get Orders by ID
 */
router.get ('/:id' , async(req, res) => { 
    const userorderList=  await OrderItem.findById({ 
        _id: req.params.id
    }).populate('user').populate(
        { path:'cart', pupulate: 
            {path:'product', populate:'category'}
        });//.select('-passwordHash');   
    if(!userorderList){ 
        return res.status(404).send(`The Order of id: ${req.params.id}cannot be found!`); 
    }
    res.status(200).json({
        status: "success", 
        orders :  userorderList, 
     });
 }); 


router.get ('/get/userorders/:userid' , async(req, res) => { 
    const orderList=  await OrderItem.find({user: req.params.userid}).populate(
        { path:'cart', pupulate: 
            {path:'product', populate:'category'}
        }); 
    if(!orderList){ 
        return res.status(404).send('Your order cannot be found!')
    }
    res.status(200).json({
        status: "success", 
        orders :  orderList, 
     });
 }); 


router.post('/' , async(req,res) => {
     const orderIds = Promise.all(req.body.cart.map( async (cartItem) => {
         let newOrderItems = new Cart({
             product: cartItem.product, 
             quantity: cartItem.quantity    
         }); 
         newOrderItems = await newOrderItems.save(); 
         return newOrderItems._id; 
     })); 
     const orderItemIdsResolved = await orderIds; 
     console.log(orderItemIdsResolved); 

    //  const totalPrices = await Promise.all(orderItemIdsResolved.map(async(orderItemId) => {
    //      const orderItem = await OrderItem.findById(orderItemId).populate('product'); 
    //      let totalPrice = (orderItem.product.price * orderItem.quantity); 
    //      return totalPrice; 
    //  } 
    //  )); 
      
    //  console.log(totalPrices); 

     const customer = await User.find({_id:req.body.id}).select('email'); 
     const filteredCustomer = customer.filter((cust) => {
        return customer.id == req.body.user; 
     }) ; 
     let userid =req.body.user ; 
    let order = new OrderItem({
        user: userid,
        orderPlacedOn:req.body.orderPlacedOn, 
        isDelivered: req.body.isDelivered, 
        orderDeliveredOn: req.body.orderDeliveredOn, 
        cart: orderItemIdsResolved, 
        status: req.body.status, 
        totalPrice: req.body.totalPrice
    }); 
    order = await order.save(); 
    if(!order){ 
        return res.status(404).send('Order does not place.')
    }
    const user=  await User.findById({_id:userid}).populate('address');   
    if(!user){ 
        return res.status(404).send(`The information of given user id: cannot be found!`); 
    }
    res.status(200).json({
           status: "success", 
           orders :  order
        }); 
}); 

/***
 * We will change only the status of order by :id 
 * PUT api/v1/orders/:id 
 * 
 * { 
 * "status" : "Shipped"
 * }
 * 
 */
router.put('/:id' , async(req, res) => { 
    const orderList=  await OrderItem.findByIdAndUpdate( 
        { _id:req.params.id}, 
        {
            status: req.body.status
        }, {
            new: true
        }
    );   
    if(!orderList){ 
        return res.status(404).send(`Order id: ${req.params.id} is updated.`); 
    }
    res.status(200).send(({
           "status": "success", 
           "status": orderList.status
       })); 
 }); 


/**
* DELETE api/vi/orders/:id
* Purpose: To remove or delete the orders
*/
router.delete('/:id', (req, res) => {
    OrderItem.findOneAndRemove({
        _id:req.params.id, 
    }).then((order) => {
        if (order){ 
            return res.status(200).json({success: true, message: 'Order is cancelled or deleted'}); 
        }else {
            return res.status(404).json({success: false, message: "Order calcellation has error"}); 
        }}).catch(err =>{
            return res.status(500).json({success: false, error: err}); 
        })
 }); 
 
 router.get('/get/totalsales', async(req,res) => { 
    const totalSales = await OrderItem.aggregate([
        {
            $group: {_id: null, totalSales: { $sum: '$totalPrice'}}
        }
    ]
    ); 
    if(!totalSales){
        return res.status(400).send("The order sales cannot be generated"); 
    }
    res.send({totalSales: totalSales.pop().totalSales}); 
 }); 


router.get(`/get/count`, async(req, res) => { 
    const countOrder = await OrderItem.countDocuments(); 
    if(!countOrder){ 
        res.status(500).json({success: false, message: "There is no order to show in database.."}); 
    }
       res.status(200).json({
        countOrder: countOrder
       }); 
 }); 
 
 
module.exports = router; 