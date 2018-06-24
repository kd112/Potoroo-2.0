const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    name : String
})


module.exports = mongoose.model('User',UserSchema)