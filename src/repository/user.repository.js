const { userModel } = require('../models');
const { sharedFunctions } = require('../utils');
const { unwantedValuesRemover } = sharedFunctions;

const userCreator = async ({ query }) => {
    return await userModel.create(query);
};

const userFindOne = async ({ query }) => {
    return await userModel.findOne(query);
};

const userFindOneWithOrCondition = async ({ query }) => {
    const filteredQuery = unwantedValuesRemover({ object: query });
    return await userModel.findOne({ $or: [filteredQuery] });
};

const userFindAll = async ({ query }) => {
    return await userModel.find(query);
};

module.exports = {
    userCreator,
    userFindOne,
    userFindOneWithOrCondition,
    userFindAll
};
