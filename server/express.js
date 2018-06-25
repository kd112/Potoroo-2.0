'use strict';
// Module sets up the configuration of the express server
// set up the configs of the express server
const express = require('express');
const app =express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())
app.use(express.static(require('path').join(vApp.root,'assets')));
require('./config/database')
const potoroo = require('./config/potoroo')
vApp.logger.debug("Setting up Models")
app.models = {
    MapModel : require('./api/models/MapModel'),
    UserModel : require('./api/models/UserModel')
}
vApp.logger.debug('Setting up Bases')
global.base = (require('./api/bases/bases'))
vApp.logger.debug('Setting up Services');
// app.services = {
global.MapServices = new (require('./api/services/MapServices'))(app.models.MapModel),
global.UserServices = new (require('./api/services/UserServices'))(app.models.UserModel)
// };
vApp.logger.debug('Setting up controllers');
global.controllers = {
    MapController:new (require('./api/controllers/MapController'))(app),
    UserController:new (require('./api/controllers/UserController'))(app)
};
vApp.logger.debug('Wiring up the routes');
require('./config/router')(app);








module.exports=app;