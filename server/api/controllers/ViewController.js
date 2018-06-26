'use strict';
const pug = require('pug');
const path = require('path')

class ViewController{
    constructor(){
        return this
    }

    renderLogin(req,res,next){
        res.status(200);
        let login = pug.renderFile(path.join(Approot,'views/public/baseTemplate.pug'), { title: appname })
        res.result  = login
        next();
    }
}

module.exports = ViewController;