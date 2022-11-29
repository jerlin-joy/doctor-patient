const { userQuery } = require('../repository');
const { userCreator, userFindOneWithOrCondition, userFindAll } = userQuery;

const userRegisterService = async ({ bodyData }) => {
    try {
        return await userCreator({ query: bodyData });
    } catch (error) {
        throw error;
    }
};

const userLoginService = async ({ bodyData }) => {
    try {
        return await userFindOneWithOrCondition({ query: bodyData });
    } catch (error) {
        throw error;
    }
};

const userGetService = async ({ queryData }) => {
    try {
        return await userFindAll({ query: queryData });
    } catch (error) {
        throw error;
    }
};

module.exports = { userRegisterService, userLoginService, userGetService };
