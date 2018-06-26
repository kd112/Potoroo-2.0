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
}

module.exports=UserServices;