require('dotenv').config();

module.exports = {
    APP_CONFIG: {
        NODE_ENV: process.env.NODE_ENV,
        PORT: process.env.PORT
    },
    MONGOOSE: {
        MONGODB_URL: '',
        OPTIONS: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    REDIS: {
        REDIS_URL: ''
    }
};
