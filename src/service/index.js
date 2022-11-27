const { userRegisterService, userLoginService } = require('./user.service');

module.exports = {
    userService: {
        userRegisterService,
        userLoginService
    }
};
