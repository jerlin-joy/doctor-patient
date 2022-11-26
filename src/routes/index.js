const userRoute = require('./user.routes');
const router = require('express').Router();

router.use('/user', userRoute);

module.exports = router;
