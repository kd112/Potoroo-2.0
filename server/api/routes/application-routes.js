const router = require('express').Router();

function routeLogger(req, res, error) {
    logger.routerlog(`${res.statusCode}`, `${req.method} ${req.url}`)
    return res.send(res.result)
}
// Routes for the application
router.get('/', injectors.setUserFromCookie, controllers.ViewController.renderLogin, routeLogger)
router.get('/login', injectors.setUserFromCookie, controllers.ViewController.renderLogin, routeLogger)
router.post('/authenticate', controllers.ApplicationController.authenticate, routeLogger)



module.exports = router;