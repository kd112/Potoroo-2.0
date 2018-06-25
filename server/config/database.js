const mongoose = require('mongoose');
// console.log(vApp.mode)
const configs = require(`../environments/configs/${vApp.mode}.json`)
// console.log(configs)

// dbconfig= {
//   url : configs.database.url
//   authent
// }

mongoose.Promise = global.Promise;
// module.exports=
vApp.logger.debug(`Connecting to Mongodb ${configs.database.name}`)
mongoose.connect(`mongodb://${configs.database.authentication.user}:${configs.database.authentication.password}@${configs.database.url}`,
(err)=>{
    if (err){
        // vApp.logger.error(err)
        emitter.emit('disconnect',err);
        
    }else {
        vApp.logger.debug(`Connected to Database ${configs.database.name}`)
        emitter.emit('connect')

    }
})