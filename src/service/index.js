const {
    userRegisterService,
    userLoginService,
    userGetService
} = require('./user.service');
const {
    conversationCreateService,
    conversationFindService
} = require('./conversation.service');
const {
    messageCreateService,
    messageFindService
} = require('./message.service');

module.exports = {
    userService: {
        userRegisterService,
        userLoginService,
        userGetService
    },
    conversationService: {
        conversationCreateService,
        conversationFindService
    },
    messageService: {
        messageCreateService,
        messageFindService
    }
};
