const router = require('express').Router()

// class Router{
//     constructor(app){
//         this.app = app;
//         return this;
//     }
        
// }

function Router(app){
    
    app.get('/',(req,res,err)=>{
        res.send('Index Page')
    })
}




module.exports=Router;