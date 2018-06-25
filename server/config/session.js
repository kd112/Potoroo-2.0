const configs = require(`../environments/configs/${vApp.mode}.json`);

module.exports = {
    session:configs.session.jwt.token
};