const { userController } = require('../controller');
const userRoute = require('express').Router();
const { userRegisterController } = userController;

userRoute.post('/register', userRegisterController);

module.exports = userRoute;
