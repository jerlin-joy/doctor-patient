const conversationRoute = require('./conversation.routes');
const messageRoute = require('./message.routes');
const userRoute = require('./user.routes');
const router = require('express').Router();

router.use('/user', userRoute);
router.use('/chat', conversationRoute);
router.use('/message', messageRoute);
module.exports = router;
