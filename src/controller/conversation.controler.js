const { conversationService } = require('../service');
const { response } = require('../utils');
const { badRequestResponse, successResponse } = response;
const { conversationCreateService, conversationFindService } =
    conversationService;

const conversationCreateController = async (req, res) => {
    try {
        const { senderId, receiverId } = req.body;
        const conversation = await conversationCreateService({
            bodyData: [senderId, receiverId]
        });
        if (!conversation) {
            return badRequestResponse(res, 'Conversations fails', {});
        }
        return successResponse(res, 'Conversation', conversation);
    } catch (error) {
        badRequestResponse(res, 'Error in conversations', error);
    }
};
const conversationFindController = async (req, res) => {
    try {
        const { senderId, receiverId } = req.params;
        const conversation = await conversationFindService({
            paramsData: [senderId, receiverId]
        });
        if (!conversation) {
            return badRequestResponse(res, 'Conversations fails', {});
        }
        return successResponse(res, 'Conversation', conversation);
    } catch (error) {
        badRequestResponse(res, 'Error in conversations', error);
    }
};

module.exports = { conversationCreateController, conversationFindController };
