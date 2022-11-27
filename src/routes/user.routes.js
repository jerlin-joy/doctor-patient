const { userController } = require('../controller');
const userRoute = require('express').Router();
const { userRegisterController, userLoginController } = userController;

userRoute.post('/register', userRegisterController);
userRoute.post('/login', userLoginController);

module.exports = userRoute;
