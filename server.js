let name = process.env.Name || 'Potoroo 2.0';
global.vApp ={
    appname : name,
    port : process.env.PORT || 5000,
    mode : process.env.NODE_ENV || 'development',
    root : __dirname,
// console.log(new(require('./config/logger'))()
    logger : new(require('./server/config/logger'))({app_title:name})
}

global.emitter = new (require('./server/config/events'))()
var express = require('./server/express');
vApp.express = express
global.co = require('co');
emitter.on('connect',()=>{

    vApp.express.listen(vApp.port,()=>{
        try {
            vApp.logger.info(`Running on port ${vApp.port} in ${vApp.mode} mode`)
            emitter.emit('appStarted')
        } catch(error){
            vApp.logger.error(error)
            process.exit(1)
        }
    })
})
emitter.on('disconnect',(error)=>{
    // console.log(error)
    vApp.logger.error(`${error.name}:${error.message}\n .....Exiting`)
    process.exit(1)
})


