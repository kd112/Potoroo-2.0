const configs = require(`../environments/configs/${mode}.json`);

module.exports = {
    session:configs.session.jwt.token
};