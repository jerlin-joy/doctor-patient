const { userRegisterService } = require('../service/user.service');
const { response } = require('../utils');
const { badRequestResponse, successResponse } = response;

const userRegisterController = async (req, res) => {
    try {
        let query;
        const { portal } = req.query;
        if (portal === 'doctors') {
            query = {
                ...req.body,
                role: 'Doctor'
            };
        } else {
            query = {
                ...req.body
            };
        }
        const user = await userRegisterService({ bodyData: query });
        if (user) {
            return successResponse(res, 'User registered successfully');
        }
        return badRequestResponse(res, user);
    } catch (error) {
        console.log(error);
        badRequestResponse(res, 'Error in register', error);
    }
};

module.exports = {
    userRegisterController
};
