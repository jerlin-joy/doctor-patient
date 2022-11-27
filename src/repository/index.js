const {
    userCreator,
    userFindOne,
    userFindOneWithOrCondition
} = require('./user.repository');

module.exports = {
    userQuery: {
        userCreator,
        userFindOne,
        userFindOneWithOrCondition
    }
};
