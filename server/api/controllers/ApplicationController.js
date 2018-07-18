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
    async createNewUser(req,res,next){
        try{
            let user = req.body.user
            user.login.secret = await UserServices.bCryptHash(user.login.password)
            delete user.login['password']
            let updateuser = await UserServices.updateUser(user._id, user);
            // let updateuser = user
            console.log(updateuser)
            if (!updateuser){
                let message = "User Not Updated"
                let error = new Error(`${message} ${user._id}`)
                error.type = "INTERNAL_VALIDATION"
                error.msg = message
                throw error
            }
            let token = await JWTServices.generateToken(updateuser.toJSON())
            res.status(200)
            res.result = {
                token:token,
                user:updateuser
            }
            next()

        }catch(error){
            logger.error(error.stack)
            res.status(500);
            res.error = error;
            res.result = { error: `${error.msg}` };
            next();
        }
    }
    async getInvitation(req,res,next){
        try{
            let id = req.params.id
            // console.log(id)
            // let user
            let filter = {
                _id:id,
                isAuthenticated:false
            }
            let user = await UserServices.getOneByQuery(filter)
            if(!user){
                let msg = "User Not Found"
                let error = new Error(`${msg} id: ${id}`)
                error.msg = msg
                error.type = "INTERNAL_VALIDATION"
                throw error
            }
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