const uuidValidator = require('uuid-validate');

const validateUuid = (uuid) => {
    return uuidValidator(uuid, 4);
}

module.exports = validateUuid;