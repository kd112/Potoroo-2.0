'use strict';


class ApplicationController{
    constructor(){
        return this;
    }
    authenticate(req,res,next){
        next()
    }
    logout(req,res,next){
        next()
    }
}

module.exports = ApplicationController;