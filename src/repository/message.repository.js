const { messageModel } = require('../models');

const messageCreate = async ({ query }) => {
    return await messageModel.create(query);
};

const messageFind = async ({ query }) => {
    return await messageModel.find(query);
};

module.exports = { messageCreate, messageFind };
