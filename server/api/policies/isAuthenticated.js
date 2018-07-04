'use strict';

module.exports = (req,res,next)=>{
    if (req.user){
        return next()
    }else{
        logger.error('User Not Authenticated')

        logger.debug(req.xhr)
    }
}