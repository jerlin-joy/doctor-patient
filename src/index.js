const app = require('./app');
const { ENV, DB } = require('./config');
const { APP_CONFIG } = ENV;
const { mongoConnect } = DB;
let server;

const startServer = async () => {
    mongoConnect();
    server = app.listen(APP_CONFIG.PORT, () => {
        console.info(
            `Listening to PORT ${APP_CONFIG.PORT} and Environment ${APP_CONFIG.NODE_ENV}`
        );
    });
};

process.on('SIGTERM', () => {
    console.info('SIGTERM received');
    if (server) {
        server.close();
    }
});

startServer();
