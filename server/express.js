const app =require('express')()
// console.log(process.env.Name || 'Potoroo2.0')
name = process.env.Name || 'Potoroo2.0'
app.port = process.env.PORT || 5000;
app.mode = process.env.NODE_ENV || 'development';
// console.log(new(require('./config/logger'))(app))
app.logger = new(require('./config/logger'))(name)
// console.log(app.logger.Info)
require('./config/router')(app)





module.exports=app;