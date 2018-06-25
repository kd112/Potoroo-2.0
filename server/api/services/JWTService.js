'use strict';
const jwt = require('jsonwebtoken');


class JWTService {
    constructor(key){
        if (!key){
            throw new Error("Require a session key to instantite")         
        }
        this.key = key
        return this;
    }
    generateToken(payload, type) {
        return jwt.sign(payload, this.key, { expiresIn: 60 * 60 * 24 });
    }
    getUser(token) {
        return new Promise(function (resolve, reject) {
            jwt.verify(token, this.key, {}, function (err, user) {
                if (err) {
                    logger.error(err);
                    reject(err);
                } else {
                    resolve(user);
                }
            });
        });
    }

}

module.exports = JWTService;