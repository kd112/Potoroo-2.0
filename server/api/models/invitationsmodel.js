const mongoose = require('mongoose');
logger.debug('Setting up Invitation Model')


let InvitationSchema = new mongoose.Schema({
    name:{
        first:{type:String, default:''}
    },
    email:{type:String, required:true}
})


InvitationSchema.statics.createAttrs = ['name', 'email']


module.exports = mongoose.model('Invitation',InvitationSchema);