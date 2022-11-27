const { APP_CONFIG, MONGOOSE, REDIS } = require('./envConfig');
const mongoConnect = require('./db');

module.exports = {
    ENV: {
        APP_CONFIG,
        MONGOOSE,
        REDIS
    },
    DB: {
        mongoConnect
    }
};
