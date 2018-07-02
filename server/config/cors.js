let cors = require('cors')
module.exports = {
    init(app) {
    let corsOptions = {}// Populate this with the domain of the production vue app
    app.use(cors())
}
}