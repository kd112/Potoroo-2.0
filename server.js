let name = process.env.Name || 'Potoroo 2.0';
global.vApp ={
    appname : name,
    port : process.env.PORT || 5000,
    mode : process.env.NODE_ENV || 'development',
// console.log(new(require('./config/logger'))()
    logger : new(require('./server/config/logger'))({app_title:name})
} 
var express = require('./server/express');
vApp.express = express
vApp.express.listen(vApp.port,()=>{
    
    vApp.logger.info(`Running on port ${vApp.port} in ${vApp.mode} mode`)
})


