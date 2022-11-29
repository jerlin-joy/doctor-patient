const {
    userCreator,
    userFindOne,
    userFindOneWithOrCondition,
    userFindAll
} = require('./user.repository');
const {
    conversationCreate,
    conversationFind
} = require('./conversation.repository');
const { messageCreate, messageFind } = require('./message.repository');

module.exports = {
    userQuery: {
        userCreator,
        userFindOne,
        userFindOneWithOrCondition,
        userFindAll
    },
    conversationQuery: {
        conversationCreate,
        conversationFind
    },
    messageQuery: {
        messageCreate,
        messageFind
    }
};
