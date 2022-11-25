const { compressionOptions } = require('./compression');
const { authLimiter } = require('./rateLimiter');

module.exports = {
    compressionOptions,
    authLimiter
};
