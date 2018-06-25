'use strict';


class ViewController{
    constructor(){
        return this
    }

    renderLogin(req,res,next){
        res.render('public/baseTemplate')
        next();
    }
}

module.exports = ViewController;