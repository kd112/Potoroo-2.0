
const userroutes = require('../api/routes/user-routes');
const maproutes = require('../api/routes/map-routes');
const applicationroutes = require('../api/routes/application-routes');

// module.exports = router;
module.exports = function(app){
    app.all('/api/*', injectors.setUserFromData, policies.isAuthenticated)
    // Crud Routes for users
    app.use('/api/users',userroutes,maproutes);
    //CRUD Routes for maps
    app.use('/api/maps',maproutes);
    // Routes for the application
    app.use('/',applicationroutes);
    
}