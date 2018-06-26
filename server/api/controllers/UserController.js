class UserController{
    constructor(){

        return this
    }
    getUsers(req,res,next){
        
       co(function *(){
           let result = yield UserServices.getByQuery({})
           return result
       }).then((result)=>{
           res.status(200)
           res.result = {user:result}
            next();
       }).catch((error)=>{
        res.status(500)
        res.result = {error:error}
        next();
       })
        
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