const { conversationController } = require('../controller');
const conversationRoute = require('express').Router();
const { conversationCreateController, conversationFindController } =
    conversationController;

conversationRoute.post('/conversation', conversationCreateController);
conversationRoute.get(
    '/conversation/:senderId/:receiverId',
    conversationFindController
);

module.exports = conversationRoute;
