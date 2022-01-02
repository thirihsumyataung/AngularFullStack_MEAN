/***
 * User Router 
 * 
 * 
 */

const { User } = require('../models/UserSchema'); 
const express = require('express'); 
const router = express.Router(); 
const jwt = require ('jsonwebtoken'); 
const bcrypt = require('bcryptjs'); 

router.get(`/`, async(req,res)=> {
    const userList = await User.find();//.select('-passwordHash'); 

    if(!userList){
        res.status(500).json({success: false}); 
    }
    res.status(200).send(userList);
}); 

/***
 * Get Users by ID
 */
router.get ('/:id' , async(req, res) => { 
    const user=  await User.findById({ 
        _id: req.params.id
    }).populate('address');//.select('-passwordHash');   
    if(!user){ 
        return res.status(404).send(`The category of id: ${req.params.id}cannot be found!`); 
    }
    res.status(200).send({
           "status": "success", 
           "category": user
       }); 
 }); 

router.post('/' , async(req,res) => {
    let user = new User({
        firstname: req.body.firstname, 
        lastname: req.body.lastname,
        email: req.body.email, 
        passwordHash: bcrypt.hashSync(req.body.passwordHash,7),
        address:req.body.address,
        createdOn: req.body.createdOn, 
        isAdmin: req.body.isAdmin
    }); 
    user = await user.save(); 
    if(!user){ 
        return res.status(404).send('The category cannot be created!')
    }

   res.send(user); 
})

/***
 * PUT api/v1/user/:id
 * Purpose : If the user is already exist , password is not necessary to update 
 * 
 */

router.put('/:id' , async(req, res) => { 
    const userExist = await User.findById(req.params.id); 
    let newPassword ; 
    if(req.body.passwordHash){
        newPassword = bcrypt.hashSync(req.body.passwordHash,7); 
    }else {
        newPassword = userExist.passwordHash; 
    }
    const user=  await User.findByIdAndUpdate( 
        { _id:req.params.id}, 
        {
        firstname: req.body.firstname, 
        lastname: req.body.lastname,
        email: req.body.email, 
        passwordHash: bcrypt.hashSync(req.body.passwordHash,7),
        address:req.body.address,
        createdOn: req.body.createdOn, 
        isAdmin: req.body.isAdmin
        }, {
            new: true
        }
    );   
    if(!user){ 
        return res.status(404).send(`The category of id: ${req.params.id} is updated.`); 
    }
    res.status(200).send(({
           "status": "success", 
           "category": categoryList
       })); 
 }); 
/****
 * LOGIN API 
 * POST /v1/api/login 
 * 
 */
router.post('/login', async(req,res)=>{
    //To know the user already exist or not 
    const user = await User.findOne({email: req.body.email}); 
    const secret = process.env.secret;
    if (!user){ 
        return res.status(400).send('The user not found'); 
    }
    try{ 
       if (user && bcrypt.compareSync(req.body.passwordHash,user.passwordHash)){

        const token = jwt.sign(
            {
            userId: user.id, 
            isAdmin: user.isAdmin 
            }, 
             secret, 
             {expiresIn: '10d'} 
             //'secret'
        ); 
        res.status(200).send({
            "status": "success", 
            "message": "User logged in successfully", 
            token: token
        }); }
        else { 
              res.send('Password is wrong!');
        }
    }
       catch(err) { 
        console.log(err);
        console.log(err.stack);
      } 
})


/**
 * To know how many users in system which can access by admin level 
 */

 router.get(`/get/count`, async(req, res) => { 
    const countUser = await User.countDocuments(); 
    if(!countUser){ 
        res.status(500).json({success: false, message: "There is no products to show in database.."}); 
    }
       res.status(200).json({
           countUser: countUser
       }); 
 }); 
module.exports = router; 