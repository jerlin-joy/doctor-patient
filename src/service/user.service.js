const { userQuery } = require('../repository');
const { userCreator } = userQuery;

const userRegisterService = async ({ bodyData }) => {
    try {
        return await userCreator({ query: bodyData });
    } catch (error) {
        throw error;
    }
};

module.exports = { userRegisterService };
