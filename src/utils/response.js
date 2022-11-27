const httpStatus = require('http-status');

exports.successResponse = (res, message, result) => {
    const response = {
        success: true,
        message,
        result
    };
    res.send(response).status(httpStatus.OK);
};

exports.notFoundResponse = (res, message) => {
    const response = {
        success: false,
        message
    };
    res.send(response).status(httpStatus.NOT_FOUND);
};

exports.badRequestResponse = (
    res,
    message = 'Something went a wrong',
    error = {}
) => {
    const response = {
        success: false,
        message,
        error
    };
    res.send(response).status(httpStatus.OK);
};

exports.authorizationResponse = (res, message) => {
    const response = {
        success: false,
        message
    };
    res.send(response).status(httpStatus.UNAUTHORIZED);
};

exports.accessErrorResponse = (res, message) => {
    const response = {
        success: false,
        message
    };
    res.send(response).status(httpStatus.FORBIDDEN);
};

exports.serverErrorResponse = (res, message, error = {}) => {
    const response = {
        success: false,
        message,
        error
    };
    res.send(response).status(httpStatus.INTERNAL_SERVER_ERROR);
};
