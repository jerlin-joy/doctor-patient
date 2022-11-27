const unwantedValuesRemover = ({ object }) => {
    return JSON.parse(JSON.stringify(object));
};

module.exports = { unwantedValuesRemover };
