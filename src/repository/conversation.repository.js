const { conversationModel } = require('../models');

const conversationCreate = async ({ query }) => {
    return await conversationModel.create({ members: query });
};

const conversationFind = async ({ query }) => {
    return await conversationModel.findOne({ members: { $all: query } });
};

module.exports = { conversationCreate, conversationFind };
