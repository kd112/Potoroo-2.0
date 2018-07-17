class UserController{
    constructor(){

        return this
    }
    async getUsers(req,res,next){
        try{
            let result = await UserServices.getByQuery({})
            res.status(200)
            res.result = {user:result}
            next();
        }catch(error){
            res.status(500)
            res.result = {error:error}
            next();
        }
        // return result
    //    co(function *(){
    //    }).then((result)=>{
    //    }).catch((error)=>{
    //    })
        
    }
    getUsersById(req,res,next){
        res.status(201)
        res.result = {UserController : req.method}
        next();

    }
    async invite(req,res,next){
        try{
            let invites = req.body.invitations;
            for ( let invite of invites){
                // console.log(invite)
                await UserServices.createUser(invite,{})
            }
            res.status(200)
            res.result = {message:"Invitations Sent",success:true}
            next()
        }catch(error){
            res.status(500)
            res.error = error
            if(!error.msg)error.msg = error
            res.result = {error: `${error.msg}`}
            next()
        }
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
    async deleteUser(req,res,next){
        try{
            await UserServices.deleteById(req.params.id)
            res.status(200)
            res.result = {message:"Record Deleted",success:true}
            next()
        }catch(error){
            res.status(500)
            // logger.error(error)
            res.error = error
            if(!error.msg)error.msg = error
            res.result = { error: `${error.msg}` }
            next()
        }
        // res.status(201)
        // res.result = {UserController : req.method}
        // next();
        
    }
}

module.exports = UserController;