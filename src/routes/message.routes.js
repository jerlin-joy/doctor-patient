const { messageController } = require('../controller');
const messageRoute = require('express').Router();
const { messageCreateController, messageGetController } = messageController;

messageRoute.post('/message', messageCreateController);
messageRoute.get('/message/:conversationId', messageGetController);

module.exports = messageRoute;
