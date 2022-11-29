const { messageService } = require('../service');
const { response } = require('../utils');
const { messageCreateService, messageFindService } = messageService;
const { badRequestResponse, successResponse } = response;

const messageCreateController = async (req, res, next) => {
    try {
        const message = messageCreateService({ bodyData: req.body });
        if (!message) {
            return badRequestResponse(res, 'Error in message create', {});
        }
        return successResponse(res, 'message data', message);
    } catch (error) {
        badRequestResponse(res, 'something went wrong', error);
    }
};

const messageGetController = async (req, res, next) => {
    try {
        const message = messageCreateService({ bodyData: req.params });
        if (!message) {
            return badRequestResponse(res, 'Error in message create', {});
        }
        return successResponse(res, 'message data', message);
    } catch (error) {
        badRequestResponse(res, 'something went wrong', error);
    }
};

module.exports = { messageCreateController, messageGetController };
