const { conversationQuery } = require('../repository');
const { conversationCreate, conversationFind } = conversationQuery;

const conversationCreateService = async ({ bodyData }) => {
    try {
        const conversation = await conversationFind({ query: bodyData });
        if (!conversation) {
            return await conversationCreate({ query: bodyData });
        }
        return null;
    } catch (error) {
        throw error;
    }
};

const conversationFindService = async ({ paramsData }) => {
    try {
        return await conversationFind({ query: paramsData });
    } catch (error) {
        throw error;
    }
};

module.exports = { conversationCreateService, conversationFindService };
