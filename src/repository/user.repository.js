const { userModel } = require('../models');

const userCreator = async ({ query }) => {
    console.log(query);
    return await userModel.create(query);
};

module.exports = { userCreator };
