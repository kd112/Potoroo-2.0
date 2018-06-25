'use strict';


class ViewController{
    constructor(){
        return this
    }

    renderLogin(req,res,next){
        res.render('public/baseTemplate',{title:appname})
        next();
    }
}

module.exports = ViewController;