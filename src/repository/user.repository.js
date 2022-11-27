const { userModel } = require('../models');
const { sharedFunctions } = require('../utils');
const { unwantedValuesRemover } = sharedFunctions;

const userCreator = async ({ query }) => {
    return await userModel.create(query);
};

const userFindOne = async ({ query }) => {
    return await userModel.findOne({ where: query });
};

const userFindOneWithOrCondition = async ({ query }) => {
    const filteredQuery = unwantedValuesRemover({ object: query });
    return await userModel.findOne({ $or: [filteredQuery] });
};
module.exports = { userCreator, userFindOne, userFindOneWithOrCondition };
