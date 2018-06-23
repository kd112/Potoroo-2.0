const express = require('express');
// const router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send({ title: 'Express' });
// });

// module.exports = router;
module.exports = function(app){
    app.get('/',function(req,res,next){
        // console.log(res)
        vApp.logger.routerlog(res.statusCode,`${req.method} ${req.url}`)
        res.send({title:"Express"})
    })

    app.get('*',(req,res,next)=>{
        vApp.logger.routerlog(404,`${req.method} ${req.url}`)
        res.send({Message:"Invalid Request"})
    })
}