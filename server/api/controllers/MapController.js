class MapController{
    constructor(){
        // console.log(app.models)
        return this
    }
    getMaps(req,res,next){
        logger.debug('Get Maps')
        next();
        
    }
    getMapsById(req,res,next){
        next();

    }
    createNewMap(req,res,next){
        next();

    }
    updateMap(req,res,next){
        next();

    }
    deleteMap(req,res,next){
        next();

    }
    async fetchMapsData(req,res,next){
        try{
            // console.log(encodeURIComponent())
            let url = req.query.url;
            if(!url){
                let msg = `A source is required.\n Expected Value, received ${url}`
                let error = new Error(msg)
                error.type = "INTERNAL_VALIDATION"
                error.msg ="Bad source"
                throw error
            }
            let data = await MapServices.fetchMapData(url)
            res.status(200)
            res.result = data
            next()

        }catch(error){
            res.status(500)
            res.error = error
            if (!error.msg) error.msg = error
            res.result = { error: `${error.msg}` }
            next()
        }
    }
}

module.exports = MapController;