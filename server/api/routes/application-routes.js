const router = require('express').Router();

function routeLogger(req, res, error) {
    
    logger.routerlog(`${res.statusCode}`, `${req.method} ${req.url}`)
    if (res.error) logger.error(res.error)
    if (res.file)return res.sendFile(res.file)
    else return res.send(res.result)
}
// Routes for the application
// router.get('/', injectors.setUserFromCookie, controllers.ViewController.renderLogin, routeLogger)
// router.get('/login', injectors.setUserFromCookie, controllers.ViewController.renderLogin, routeLogger)
router.post('/authenticate', controllers.ApplicationController.authenticate, routeLogger)
router.get('/session',controllers.ApplicationController.getSession,routeLogger)
router.get('/invitation/:id',controllers.ApplicationController.getInvitation,routeLogger)
router.post('/invitation', controllers.ApplicationController.createNewUser,routeLogger)

module.exports = router;