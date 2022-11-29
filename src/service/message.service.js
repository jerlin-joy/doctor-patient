const { messageQuery } = require('../repository');
const { messageCreate, messageFind } = messageQuery;

const messageCreateService = async ({ bodyData }) => {
    try {
        return await messageCreate({ query: bodyData });
    } catch (error) {
        throw error;
    }
};

const messageFindService = async ({ bodyData }) => {
    try {
        return await messageFind({ query: bodyData });
    } catch (error) {
        throw error;
    }
};
module.exports = { messageCreateService, messageFindService };
