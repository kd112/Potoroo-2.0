const app =require('express')()
// // console.log(process.env.Name || 'Potoroo2.0')
// name = process.env.Name || 'Potoroo2.0'
// app.port = process.env.PORT || 5000;
// app.mode = process.env.NODE_ENV || 'development';
// // console.log(new(require('./config/logger'))(app))
// app.logger = new(require('./config/logger'))({app_title:name})
// console.log(app.logger.Info)
// app.use(vApp.logger.routerlog)
// console.log(vApp.logger.routerlog({method:"GET",url:"/"}))
require('./config/router')(app)
// console.log(router)
// app.use('/', router);
// app.use('/',require('./config/router'))





module.exports=app;