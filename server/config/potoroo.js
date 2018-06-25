module.exports = {};
emitter.on('appStarted', () => {
    co(function *(){
        let admin = yield UserServices.getOneByQuery({'login.username':'admin'})
        if (!admin){
            admin = {
                name:{
                    first:'Potoroo',
                    last:'Admin'
                },
                company:"",
                login:{
                    username:"admin",
                    secret: yield UserServices.bCryptHash('passw0rd')
                },
                isAdmin:true
            };
            vApp.logger.debug(admin)
            yield UserServices.createUser(admin)
        }
        return ;
    }).then(()=>{
        vApp.logger.debug('Admin User established');
    }).catch((error)=>{
        vApp.logger.error(error)
    })

})