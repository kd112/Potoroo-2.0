const configs = require(`../environments/configs/${mode}.json`)
module.export={
name:configs.app.name || process.env.APP_NAME||'PORTAL',
port:configs.app.port || process.env.PORT||'5000'
};