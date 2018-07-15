const router = require('express').Router();

function routeLogger(req, res, error) {
    logger.routerlog(`${res.statusCode}`, `${req.method} /api/users${req.url}`)
    if (res.error) logger.error(res.error)
    return res.send(res.result)
}
// Crud Routes for users
// router.get('/api/users', injectors.setUserFromCookie, controllers.UserController.getUsers, routeLogger)
// router.get('/api/users/:id', injectors.setUserFromCookie, controllers.UserController.getUsersById, routeLogger)
// router.post('/api/users', injectors.setUserFromCookie, controllers.UserController.createNewUser, routeLogger)
// router.put('/api/users/:id', injectors.setUserFromCookie, controllers.UserController.updateUser, routeLogger)
// router.delete('/api/users/:id', injectors.setUserFromCookie, controllers.UserController.deleteUser, routeLogger)
// router.all('/*', injectors.setUserFromData)
router.get('/', controllers.UserController.getUsers,routeLogger)
router.get('/:id', controllers.UserController.getUsersById,routeLogger)
router.post('/', controllers.UserController.createNewUser,routeLogger)
router.put('/:id', controllers.UserController.updateUser,routeLogger)
router.delete('/:id', controllers.UserController.deleteUser,routeLogger)
router.post('/invite',controllers.UserController.invite,routeLogger)


module.exports=router;