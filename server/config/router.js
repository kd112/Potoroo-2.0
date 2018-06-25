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
    app.get('/api/maps',injectors.setUserFromCookie,controllers.MapController.getMaps,routeLogger)
    app.get('/api/maps/:id',injectors.setUserFromCookie,controllers.MapController.getMapsById,routeLogger)
    app.post('/api/maps',injectors.setUserFromCookie,controllers.MapController.createNewMap,routeLogger)
    app.put('/api/maps/:id',injectors.setUserFromCookie,controllers.MapController.updateMap,routeLogger)
    app.delete('/api/maps/:id',injectors.setUserFromCookie,controllers.MapController.deleteMap,routeLogger)
    // Crud Routes for users
    app.get('/api/users',injectors.setUserFromCookie,controllers.UserController.getUsers,routeLogger)
    app.get('/api/users/:id',injectors.setUserFromCookie,controllers.UserController.getUsersById,routeLogger)
    app.post('/api/users',injectors.setUserFromCookie,controllers.UserController.createNewUser,routeLogger)
    app.put('/api/users/:id',injectors.setUserFromCookie,controllers.UserController.updateUser,routeLogger)
    app.delete('/api/users/:id',injectors.setUserFromCookie,controllers.UserController.deleteUser,routeLogger)

    // Routes for the application
    app.get('/', injectors.setUserFromCookie,controllers.ViewController.renderLogin,routeLogger)
    app.get('/login', injectors.setUserFromCookie,controllers.ViewController.renderLogin, routeLogger)
    app.post('/authenticate', controllers.ApplicationController.authenticate, routeLogger)
}