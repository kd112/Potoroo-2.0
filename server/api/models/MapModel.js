const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const MapSchema  =new mongoose.Schema({
    // _id:mongoose.Types.ObjectId,
    name : String
})


module.exports = mongoose.model('Map',MapSchema)