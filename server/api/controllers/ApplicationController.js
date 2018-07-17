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
    async authenticate(req,res,next){
        // console.log(req.body.getField)
        let username = req.body.username
        let password = req.body.password;
        try{
            if(!username || !password) {
                let msg = `Invalid credentials, username:${username}`
                let error = new Error(msg)
                error.msg = "Auth failed"
                throw error
            }
            let user = await UserServices.authenticate(username, password)
            let token = await JWTServices.generateToken(user)
            res.status(200);
            res.result = {token:token,
                          user:user
                        }
            next()
        }catch(error){
            res.status(500)
            res.error = error
            res.result = {error:`${error.msg}`}
            next()
        }
        
    }
    logout(req,res,next){
        next()
    }

    async getSession(req,res,next){
        try{
            let token = req.headers.cookies;
            let user = await JWTServices.getUser(token)
            res.status=200
            res.result = {
                token:token,
                user:user
            }
            next()
        }
        catch(error){
            res.status(500)
            res.error = error
            res.result = { error: `${error.msg}` }
            next()
        }
    }
    async getInvitation(req,res,next){
        try{
            let id = req.params.id
            // console.log(id)
            // let user
            let user = await UserServices.getById(id)
            // console.log(user)
            res.status(200)
            res.result = {user:user}
            next();
        }catch(error){
            res.status(500)
            res.error = error
            res.result = {error:error.msg}
            next();
        }
    }
}

module.exports = ApplicationController;