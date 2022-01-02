/**
 * user endpoints.
 */

 const router = require('express').Router();

 const userModel = require('../models/UserModel.js');
 const userService = require('../services/UserService');
 const bodyparser = require('body-parser'); 
 router.post('/register', registerUser);

 async function registerUser(req, res) {
     let user = req.body;
     try {
         const result = await userModel.registerUser(user);
         res.send({
             "status" : "success",
             "message": "user created succesfully"
            });
     } catch(err) {
         console.log(err);
         res.send({
             "status": "failure",
             "message": "failed to create the user"
         });
     }
 }

 module.exports = router;