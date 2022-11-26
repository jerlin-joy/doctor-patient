const {
    successResponse,
    accessErrorResponse,
    authorizationResponse,
    badRequestResponse,
    notFoundResponse,
    serverErrorResponse
} = require('./response');

module.exports = {
    response: {
        successResponse,
        accessErrorResponse,
        authorizationResponse,
        badRequestResponse,
        notFoundResponse,
        serverErrorResponse
    }
};
