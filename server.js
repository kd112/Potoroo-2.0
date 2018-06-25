let name = process.env.Name || 'Potoroo 2.0';
global.vApp ={
    appname : name,
    port : process.env.PORT || 5000,
    mode : process.env.NODE_ENV || 'development',
    root : __dirname,
// console.log(new(require('./config/logger'))()
    logger : new(require('./server/config/logger'))({app_title:name})
}

var express = require('./server/express');
vApp.express = express
global.dbConnectEvent = new (require('./server/config/events'))()

dbConnectEvent.on('connect',()=>{

    vApp.express.listen(vApp.port,()=>{
        
        vApp.logger.info(`Running on port ${vApp.port} in ${vApp.mode} mode`)
    })
})
dbConnectEvent.on('disconnect',(error)=>{
    // console.log(error)
    vApp.logger.error(`${error.name}:${error.message}\n .....Exiting`)
    process.exit(1)
})


