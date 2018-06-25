'use strict';
module.exports = function (req, res, next) {
    // logger.debug(req.method, ' ', req.path);
    co(function* () {
        if (req.cookies['encl-ui'] && req.cookies['encl-ui'].code) {
            var token = req.cookies['encl-ui'].code;
            let user = yield JWTServices.getUser(token);

            return user;
        } else {
            return undefined;
        }
    }).then(function (user) {
        if (user) {
            req.user = user;
        }
        return next();
    }).catch(function (error) {
        logger.error(error);
        res.clearCookie('encl-ui');
        return next();
    });
};