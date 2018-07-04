const router = require('express').Router();

function routeLogger(req, res, error) {
    logger.routerlog(`${res.statusCode}`, `${req.method} ${req.url}`)
    return res.send(res.result)
}
// router.get('/maps', injectors.setUserFromCookie, controllers.MapController.getMaps, routeLogger)
// router.get('/maps/:id', injectors.setUserFromCookie, controllers.MapController.getMapsById, routeLogger)
// router.post('/maps', injectors.setUserFromCookie, controllers.MapController.createNewMap, routeLogger)
// router.put('/maps/:id', injectors.setUserFromCookie, controllers.MapController.updateMap, routeLogger)
// router.delete('/maps/:id', injectors.setUserFromCookie, controllers.MapController.deleteMap, routeLogger)
// router.all('/*', injectors.setUserFromData)
router.get('/', injectors.setUserFromCookie, controllers.MapController.getMaps, routeLogger)
router.get('/:id', injectors.setUserFromCookie, controllers.MapController.getMapsById, routeLogger)
router.post('/', injectors.setUserFromCookie, controllers.MapController.createNewMap, routeLogger)
router.put('/:id', injectors.setUserFromCookie, controllers.MapController.updateMap, routeLogger)
router.delete('/:id', injectors.setUserFromCookie, controllers.MapController.deleteMap, routeLogger)



module.exports = router;