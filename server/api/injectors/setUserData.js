'use strict';

module.exports = function (req, res, next) {
    // vApp.logger.debug(req.method, ' ', req.path);
    co(function* () {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            var token = req.headers.authorization.split(' ')[1];
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
        vApp.log.error(error);
        res.status(403).json({ error: 'Forbidden' });
    });
};