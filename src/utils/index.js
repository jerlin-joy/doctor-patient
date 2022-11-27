const {
    successResponse,
    accessErrorResponse,
    authorizationResponse,
    badRequestResponse,
    notFoundResponse,
    serverErrorResponse
} = require('./response');
const { unwantedValuesRemover } = require('./sharedFunctions');

module.exports = {
    response: {
        successResponse,
        accessErrorResponse,
        authorizationResponse,
        badRequestResponse,
        notFoundResponse,
        serverErrorResponse
    },
    sharedFunctions: {
        unwantedValuesRemover
    }
};
