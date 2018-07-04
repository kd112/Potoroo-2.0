module.exports = {};
emitter.on('appStarted', async () => {
    try{
        let admin = await UserServices.getOneByQuery({'login.username':'admin'})
        if (!admin){
            admin = {
                name:{
                    first:'Potoroo',
                    last:'Admin'
                },
                company:"",
                login:{
                    username:"admin",
                    secret: await UserServices.bCryptHash('passw0rd')
                },
                isAdmin:true
            };
            await UserServices.createUser(admin)
        }
        logger.debug('Admin User established');
        return ;

    }catch(error){
        logger.error(error.stack)
    }
    // co(function *(){
    // }).then(()=>{
    // }).catch((error)=>{
    //     logger.error(error)
    // })

})