class UserController{
    constructor(app){
        this.app = app;
        return this
    }
    getUsers(req,res,next){
        
        res.status(201)
        res.result = {UserController : req.method}
        next();
        
    }
    getUsersById(req,res,next){
        res.status(201)
        res.result = {UserController : req.method}
        next();

    }
    createNewUser(req,res,next){
        res.status(201)
        res.result = {UserController : req.method}
        next();

    }
    updateUser(req,res,next){
        res.status(201)
        res.result = {UserController : req.method}
        next();

    }
    deleteUser(req,res,next){
        res.status(201)
        res.result = {UserController : req.method}
        next();
        
    }
}

module.exports = UserController;