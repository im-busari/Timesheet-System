const getUserId = (req) => {
    return req.session.user.id;
};

module.exports = getUserId;