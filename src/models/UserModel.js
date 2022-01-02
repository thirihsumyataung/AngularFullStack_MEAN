const mongoose = require('mongoose');
const userSchema = require('./UserSchema');
const userService = require('../services/UserService');
const userModel = mongoose.model('UserModel', userSchema);

userModel.registerUser = registerUser;
module.exports = userModel;

async function registerUser(user) {
    return userModel.create(user);
}