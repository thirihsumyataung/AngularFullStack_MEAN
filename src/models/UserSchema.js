/**
 * Define the schema for a user
 */

 const mongoose = require('mongoose');

 const UserSchema = mongoose.Schema({
     "firstName": {
         type: String,
         required: true
     },
     "lastName": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "password": {
        type: String,
        required: true
    }
 },
     {
         collection: "users"
     }
 );
 
 module.exports = UserSchema;