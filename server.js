global.vApp = require('./server/express');

vApp.listen(vApp.port,()=>{
    // console.log(`Listening on ${vApp.port}`)
    vApp.logger.Info(`Running on port ${vApp.port} in ${vApp.mode} mode`)
})



