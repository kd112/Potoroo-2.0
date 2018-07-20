const router = require('express').Router();

function routeLogger(req, res, error) {
    logger.routerlog(`${res.statusCode}`, `${req.method} /api/maps${req.url}`);
    if (res.error) logger.error(res.error);
    return res.send(res.result);
}
// router.get('/maps', injectors.setUserFromCookie, controllers.MapController.getMaps, routeLogger)
// router.get('/maps/:id', injectors.setUserFromCookie, controllers.MapController.getMapsById, routeLogger)
// router.post('/maps', injectors.setUserFromCookie, controllers.MapController.createNewMap, routeLogger)
// router.put('/maps/:id', injectors.setUserFromCookie, controllers.MapController.updateMap, routeLogger)
// router.delete('/maps/:id', injectors.setUserFromCookie, controllers.MapController.deleteMap, routeLogger)
// router.all('/*', injectors.setUserFromData)
router.get('/',  controllers.MapController.getMaps, routeLogger)
router.get('/fetch/', controllers.MapController.fetchMapsData, routeLogger)
router.get('/:id',  controllers.MapController.getMapsById, routeLogger)
router.post('/',  controllers.MapController.createNewMap, routeLogger)
router.put('/:id',  controllers.MapController.updateMap, routeLogger)
router.delete('/:id',  controllers.MapController.deleteMap, routeLogger)



module.exports = router;