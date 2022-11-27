const mongoose = require('mongoose');
const { MONGOOSE } = require('../envConfig');
const { MONGODB_URL, OPTIONS } = MONGOOSE;
module.exports = () => {
    mongoose
        .connect(MONGODB_URL, OPTIONS)
        .then(() => {
            console.info('Mongo Is Ready And Connected....!');
        })
        .catch((err) => {
            console.error(err);
        });
    mongoose.connection.on('connected', () => {
        console.info('Mongo Is Connected.....');
    });

    mongoose.connection.on('error', (err) => {
        console.error(err.message);
    });

    mongoose.connection.on('disconnected', () => {
        console.error('Mongoose Connection Is Disconnected...');
    });

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.error(
                'Mongoose Connection Is Disconnected Due To App Termination...'
            );
            process.exit(0);
        });
    });
};
