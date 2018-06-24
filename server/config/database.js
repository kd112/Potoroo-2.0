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
mongoose.connect(`mongodb://${configs.database.authentication.user}:${configs.database.authentication.password}@${configs.database.url}`,
(err)=>{
    if (err){
        vApp.logger.error(`Couldnot connect to Database ${configs.database.name}, Database Configs Invalid`)
        process.exit()
    }else vApp.logger.debug(`Connected to Database ${configs.database.name}`)
})