'use strict';
// Module sets up the configuration of the express server
// set up the configs of the express server
const express = require('express');
const app =express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())
app.use(express.static(require('path').join(vApp.root,'assets')));

// Connect to the mongodb database
require('./config/database')
// Instantiate the function that will create the admin user on first start up
const potoroo = require('./config/potoroo')
// Configure the session token used to allow users to login
const sessiontoken = require('./config/session');

// Set up the mongo models
vApp.logger.debug("Setting up Models")
app.models = {
    MapModel : require('./api/models/MapModel'),
    UserModel : require('./api/models/UserModel')
}
// The base class that all services to query the database will inherit
vApp.logger.debug('Setting up Bases')
global.base = (require('./api/bases/bases'))
vApp.logger.debug('Setting up Services');

// Settting up the services, these form the classes that will actually interact with the database
// These are global variables to make it easy to call them from any controller class
global.MapServices = new (require('./api/services/MapServices'))(app.models.MapModel),
global.UserServices = new (require('./api/services/UserServices'))(app.models.UserModel)
global.JWTServices = new(require('./api/services/JWTService'))(sessiontoken.session);

//  The controller object, any route set up in the router will call one of these controllers
// These controllers are again global so that they can be called from any route file
vApp.logger.debug('Setting up controllers');
global.controllers = {
    MapController:new (require('./api/controllers/MapController'))(app),
    UserController:new (require('./api/controllers/UserController'))(app)
};
// The route file for this application
vApp.logger.debug('Wiring up the routes');
require('./config/router')(app);








module.exports=app;