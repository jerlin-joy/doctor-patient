const {
    userRegisterController,
    userLoginController
} = require('./user.controller');

module.exports = {
    userController: {
        userRegisterController,
        userLoginController
    }
};
