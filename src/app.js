const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const morgan = require('morgan');
const { compressionOptions, authLimiter } = require('./middlewares');
const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xss());
app.use(compressionOptions);
app.use(authLimiter);
app.use(cors());
app.options('*', cors());
app.use(morgan('combined'));

module.exports = app;
