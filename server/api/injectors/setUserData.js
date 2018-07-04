'use strict';

module.exports = async function (req, res, next) {
    // logger.debug(req.method, ' ', req.path);
    try{
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            var token = req.headers.authorization.split(' ')[1];
            let user = await JWTServices.getUser(token);
            if (user) {
                req.user = user;
            }
            return next();
       }else{
           throw new Error("Invalid Token")
       }
    }catch(error){
        logger.error(error);
        res.status(403).json({ error: 'Forbidden' });
    }
};