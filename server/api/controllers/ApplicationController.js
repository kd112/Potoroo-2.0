'use strict';

const path = require('path');
class ApplicationController{
    constructor(){
        return this;
    }

    renderApp(req,res,next){
        let file = path.join(Approot, 'app/index.html')
        console.log(file)
        res.file = file
        next();
    }
    authenticate(req,res,next){
        // console.log(req.body.getField)
        let username = req.body.username
        let password = req.body.password;
        
        co(function *(){
            if(!username || !password) {
                let msg = `Invalid credentials, username:${username}`
                let error = new Error(msg)
                error.msg = "Auth failed"
                throw error
            }
            
            let user = yield UserServices.authenticate(username,password)
            
            return user 
            
        }).then((result)=>{
            
            res.status(200);
            res.result = result
            next()
        }).catch((error)=>{
            
            res.status(500)
            res.error = error
            res.result = {error:`${error.msg}`}
            next()
        })
    }
    logout(req,res,next){
        next()
    }
}

module.exports = ApplicationController;