const { userController } = require('../controller');
const userRoute = require('express').Router();
const { userRegisterController, userLoginController, userGetController } =
    userController;

userRoute.post('/register', userRegisterController);
userRoute.post('/login', userLoginController);
userRoute.get('/getUser', userGetController);

module.exports = userRoute;
