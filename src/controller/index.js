const {
    conversationCreateController,
    conversationFindController
} = require('./conversation.controler');
const {
    userRegisterController,
    userLoginController,
    userGetController
} = require('./user.controller');
const {
    messageCreateController,
    messageGetController
} = require('./message.controller');
module.exports = {
    userController: {
        userRegisterController,
        userLoginController,
        userGetController
    },
    conversationController: {
        conversationCreateController,
        conversationFindController
    },
    messageController: {
        messageCreateController,
        messageGetController
    }
};
