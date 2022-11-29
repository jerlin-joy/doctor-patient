const bcrypt = require('bcrypt');
const { userQuery } = require('../repository');
const { userService } = require('../service');
const { userRegisterService, userLoginService, userGetService } = userService;
const { response } = require('../utils');
const { badRequestResponse, successResponse } = response;
const { userFindOne } = userQuery;

const userRegisterController = async (req, res) => {
    try {
        let query;
        const { portal } = req.query;
        const { userEmail, userPassword } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(userPassword, salt);
        if (portal === 'doctors') {
            query = {
                ...req.body,
                userPassword: hash,
                role: 'Doctor'
            };
        } else {
            query = {
                ...req.body,
                userPassword: hash
            };
        }
        const isUserAlreadyExists = await userFindOne({
            query: { userEmail }
        });
        if (isUserAlreadyExists) {
            return badRequestResponse(
                res,
                `User already exists with ${isUserAlreadyExists.userEmail}`
            );
        }
        const user = await userRegisterService({ bodyData: query });
        if (!user) {
            return badRequestResponse(res, user);
        }
        return successResponse(res, 'User registered successfully', user);
    } catch (error) {
        badRequestResponse(res, 'Error in register', error);
    }
};

const userLoginController = async (req, res) => {
    try {
        const { userEmail, userPassword, userName } = req.body;
        const bodyData = { userEmail, userName };
        const user = await userLoginService({ bodyData });
        if (!user) {
            return badRequestResponse(
                res,
                'Invalid username or email',
                user || {}
            );
        }
        const isMatch = await bcrypt.compare(userPassword, user.userPassword);
        if (!isMatch) {
            return badRequestResponse(
                res,
                `Invalid password for this ${user.userEmail}`,
                {}
            );
        }
        return successResponse(res, 'Login success', user);
    } catch (error) {
        badRequestResponse(res, 'Error in login', error);
    }
};

const userGetController = async (req, res) => {
    try {
        console.log(req.query);
        const user = await userGetService({ queryData: req.query });
        if (!user) {
            return badRequestResponse(res, `No data available`, {});
        }
        return successResponse(res, 'User data found', user);
    } catch (error) {
        badRequestResponse(res, 'Error in login', error);
    }
};

module.exports = {
    userRegisterController,
    userLoginController,
    userGetController
};
