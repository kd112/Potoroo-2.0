const mongoose = require('mongoose');
// console.log(mode)
const configs = require(`../environments/configs/${mode}.json`)
// console.log(configs)

// dbconfig= {
//   url : configs.database.url
//   authent
// }

mongoose.Promise = global.Promise;
// module.exports=
logger.debug(`Connecting to Mongodb ${configs.database.name}`)
mongoose.connect(`mongodb://${configs.database.authentication.user}:${configs.database.authentication.password}@${configs.database.url}`,
(err)=>{
    if (err){
        
        // Emit this signal along with the error, so that the application 
        // Will exit cleanly,
        emitter.emit('disconnect',err);
        
    }else {
        logger.debug(`Connected to Database ${configs.database.name}`)
        // The signal when emits tells the application to start the server
        emitter.emit('connect')

    }
})