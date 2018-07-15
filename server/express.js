'use strict';

// Module sets up the configuration of the express server

// set up the configs of the express server
const express = require('express');
const app =express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())


app.use(express.static('public'))

// Using PUG as the template
app.set('view engine','pug')

// Connect to the mongodb database
require('./config/database')

// Instantiate the function that will create the admin user on first start up
const potoroo = require('./config/potoroo')

// Configure the session token used to allow users to login
const sessiontoken = require('./config/session');
app.appconfig = require('./config/application');

// Set up the mongo models
logger.debug("Setting up Models")
app.models = {
    MapModel : require('./api/models/MapModel'),
    UserModel : require('./api/models/UserModel'),
    InvitationModel : require('./api/models/invitationsmodel')
}

// The base class that all services to query the database will inherit
logger.debug('Setting up Bases')
global.base = (require('./api/bases/bases'))
logger.debug('Setting up Services');


// Setting up the services, these form the classes that will actually interact with the database
// These are global variables to make it easy to call them from any controller class
global.MapServices = new (require('./api/services/MapServices'))(app.models.MapModel),
global.UserServices = new (require('./api/services/UserServices'))(app.models.UserModel)
global.JWTServices = new(require('./api/services/JWTService'))(sessiontoken.session);
global.InvitationServices = new(require('./api/services/InvitationService'))(app.models.InvitationModel)

logger.debug('Setting up Policies')
global.policies = {
    isAuthenticated:require('./api/policies/isAuthenticated')
}

// Setting up injectors
logger.debug('Setting up Injectors Services');
global.injectors={
    setUserFromCookie: require('./api/injectors/setUserFromCookie'),
    setUserFromData: require('./api/injectors/setUserData')
}

//  The controller object, any route set up in the router will call one of these controllers
// These controllers are again global so that they can be called from any route file
logger.debug('Setting up controllers');
global.controllers = {
    MapController:new (require('./api/controllers/MapController'))(),
    UserController:new (require('./api/controllers/UserController'))(),
    ApplicationController : new(require('./api/controllers/ApplicationController'))(),
    ViewController: new(require('./api/controllers/ViewController'))()
};

// Enable Cors
logger.debug('Enabling Cors')
require('./config/cors').init(app)

// The route file for this application
logger.debug('Wiring up the routes');
require('./config/router')(app);








module.exports=app;