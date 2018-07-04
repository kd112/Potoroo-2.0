const bcrypt = require('bcrypt-nodejs');
let SALT_WORK_FACTOR = 11;
class UserServices extends base{
    constructor(model){
        super(model)
        this.model=model
        return this
    }
    // free string password input
    // output hashed password
    bCryptHash(password){
        return new Promise((resolve, reject) => {
            try {
                let hash = bcrypt.hashSync(password);
                resolve(hash);

            } catch (err) {
                reject(err);
            }
        });
    }
    validatePassword(password_hash,user_password){
        return new Promise((resolve,reject)=>{
            bcrypt.compare(user_password,password_hash,(error,res)=>{
                if (error || !res){
                    resolve(false)
                }else{
                    resolve(true)
                }
            })
        })
    }
    getByQuery(filter, option) {
        let getOneByQuery = super.getByQuery(filter, option)
        return new Promise((resolve, reject) => {
            getOneByQuery.then((result) => {
                return resolve(result)
            }).catch((error) => {
                reject(error)
            })
        })
    }
    getOneByQuery(filter,option){
        let getOneByQuery = super.getOneByQuery(filter,option)
        return new Promise((resolve,reject)=>{
            getOneByQuery.then((result)=>{
                return resolve(result)
            }).catch((error)=>{
                reject(error)
            })
        })
    }
    createUser(userInfo,options){
        // let self = this;
        let create = super.create(userInfo,options)
        return new Promise((resolve,reject)=>{

            create.then((result)=>{
                resolve(result)
            }).catch((error)=>{
                reject(error)
            })
        })
    }
    updateUser(userId,userInfo,options){
        let updateById = super.updateById(userId,userInfo,options)
        return new Promise((resolve,reject)=>{
            updateById.then((result)=>{
                return resolve(result);
            }).catch((error)=>{
                reject(error)
            })
        })
    }
    async authenticate(username, password) {
        let self = this;
        let users = await self.getByQuery({
            'login.username':username,
        })
        if (users.length!=1){
            let message = `Multiple users with username:${username}`
            let error = new Error(message)
            error.msg = "Auth Failed"
            throw error
        }
        let user = users[0];
        let passwordMatch = false;
        if (user){
            passwordMatch = await self.validatePassword(user.login.secret,password)
        }
        if(!user || !passwordMatch){
            let message = `Invalid Credentials username:${username}`
            let error = new Error(message)
            error.msg = "Auth Failed"
            throw error
        }
        return user;
        // return new Promise((resolve, reject) => {

        //     co(function* () {
        //         let users = yield self.getByQuery({
        //             'login.username': username,
        //         })
        //         if (users.length != 1) {
        //             let message = `Multiple users with username:${username}`
        //             let error = new Error(message)
        //             error.msg = "Auth Failed"
        //             yield Promise.reject(error)
        //         }
        //         let user = users[0];
        //         let passwordMatch = false;

        //         if(user){
        //             passwordMatch = yield self.validatePassword(user.login.secret,password)
        //         }
        //         if (!user || !passwordMatch){
        //             let message = `Invalid Credentials username:${username}`
        //             let error = new Error(message)
        //             error.msg = "Auth Failed"
        //             yield Promise.reject(error)
        //         }
        //         return user

        //     }).then((result) => { 
        //         return resolve(result)
        //     }).catch((error) => { 
        //         return reject(error)
        //     })
        // })
    }
    async deleteById(id){
        try{
            return await super.deleteById(id)
        }catch(error){
            throw error
        }
    }
}

module.exports=UserServices;