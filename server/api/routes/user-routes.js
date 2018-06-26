const router = require('express').Router();

function routeLogger(req, res, error) {
    logger.routerlog(`${res.statusCode}`, `${req.method} ${req.url}`)
    return res.send(res.result)
}
// Crud Routes for users
// router.get('/api/users', injectors.setUserFromCookie, controllers.UserController.getUsers, routeLogger)
// router.get('/api/users/:id', injectors.setUserFromCookie, controllers.UserController.getUsersById, routeLogger)
// router.post('/api/users', injectors.setUserFromCookie, controllers.UserController.createNewUser, routeLogger)
// router.put('/api/users/:id', injectors.setUserFromCookie, controllers.UserController.updateUser, routeLogger)
// router.delete('/api/users/:id', injectors.setUserFromCookie, controllers.UserController.deleteUser, routeLogger)
router.get('/', injectors.setUserFromCookie, controllers.UserController.getUsers, routeLogger)
router.get('/:id', injectors.setUserFromCookie, controllers.UserController.getUsersById, routeLogger)
router.post('/', injectors.setUserFromCookie, controllers.UserController.createNewUser, routeLogger)
router.put('/:id', injectors.setUserFromCookie, controllers.UserController.updateUser, routeLogger)
router.delete('/:id', injectors.setUserFromCookie, controllers.UserController.deleteUser, routeLogger)


module.exports=router;