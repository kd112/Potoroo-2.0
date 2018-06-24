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
    app.get('/api/maps',app.controllers.MapController.getMaps,routeLogger)
    app.get('/api/maps/:id',app.controllers.MapController.getMapsById,routeLogger)
    app.post('/api/maps',app.controllers.MapController.createNewMap,routeLogger)
    app.put('/api/maps/:id',app.controllers.MapController.updateMap,routeLogger)
    app.delete('/api/maps/:id',app.controllers.MapController.deleteMap,routeLogger)
    // Crud Routes for users
    app.get('/api/users',app.controllers.UserController.getUsers,routeLogger)
    app.get('/api/users/:id',app.controllers.UserController.getUsersById,routeLogger)
    app.post('/api/users',app.controllers.UserController.createNewUser,routeLogger)
    app.put('/api/users/:id',app.controllers.UserController.updateUser,routeLogger)
    app.delete('/api/users/:id',app.controllers.UserController.deleteUser,routeLogger)
}