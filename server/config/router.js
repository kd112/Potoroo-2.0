const express = require('express');
// const router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send({ title: 'Express' });
// });

// module.exports = router;
module.exports = function(app){
    

    function routeLogger(req,res,error){
        vApp.logger.routerlog(`${res.statusCode}`,`${req.method} ${req.url}`)
        return res.send(res.result)
    }
    //CRUD Routes for maps
    app.get('/api/maps',controllers.MapController.getMaps,routeLogger)
    app.get('/api/maps/:id',controllers.MapController.getMapsById,routeLogger)
    app.post('/api/maps',controllers.MapController.createNewMap,routeLogger)
    app.put('/api/maps/:id',controllers.MapController.updateMap,routeLogger)
    app.delete('/api/maps/:id',controllers.MapController.deleteMap,routeLogger)
    // Crud Routes for users
    app.get('/api/users',controllers.UserController.getUsers,routeLogger)
    app.get('/api/users/:id',controllers.UserController.getUsersById,routeLogger)
    app.post('/api/users',controllers.UserController.createNewUser,routeLogger)
    app.put('/api/users/:id',controllers.UserController.updateUser,routeLogger)
    app.delete('/api/users/:id',controllers.UserController.deleteUser,routeLogger)

    // Routes for the application
    app.get('/', injectors.setUserFromCookie,controllers.ViewController.renderLogin,routeLogger)
    app.get('/login', injectors.setUserFromCookie,controllers.ViewController.renderLogin, routeLogger)
    app.post('/authenticate', controllers.ApplicationController.authenticate, routeLogger)
}