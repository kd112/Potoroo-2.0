let name = process.env.Name || 'Potoroo';
// global.vApp ={
global.appname = name,
global.port = process.env.PORT || 5000,
global.mode = process.env.NODE_ENV || 'development',
global.Approot = __dirname,
// console.log(new(require('./config/logger'))()
global.logger = new(require('./server/config/logger'))({app_title:name})
// }

global.emitter = new (require('./server/config/events'))()
var express = require('./server/express');
// express = express
global.co = require('co');
emitter.on('connect',()=>{

    express.listen(port,()=>{
        try {
            logger.info(`Running on port ${port} in ${mode} mode`)
            // The appStarted emitter will run all functions and scripts that 
            // waiting for this event
            emitter.emit('appStarted')
        } catch(error){
            logger.error(error)
            process.exit(1)
        }
    })
})
emitter.on('disconnect',(error)=>{
    // console.log(error)
    logger.error(`${error.name}:${error.message}\n .....Exiting`)
    process.exit(1)
})


