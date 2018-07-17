const mongoose = require('mongoose');
logger.debug('Setting up User Model')
let UserSchema = new mongoose.Schema({
    name: {
        first: { type: String, default: '' },
        last: { type: String, default: '' }
    },

    login: {
        username: String,
        secret: String,
        last: { type: Date, default: Date.now }
    },

    phone: String,
    mobile: String,
    email: String,
    company: String,
    isAuthenticated:{type:Boolean,default:false},
    isAdmin: { type: Boolean, default: false },
    archived: { type: Boolean, default: false }
    
}, { timestamps: true })

// UserSchema.pre('findOneAndUpdate',(next)=>{
//     let self = this;
//     // if we are updating password then we update the secret.
//     if (this._update.login && this._update.login.password) {
//         co(function* () {
//             return yield UsersService.bCryptHash(self._update.login.password);
//         }).then(function (hashedSecret) {
//             let newLoginObject = Object.assign({}, self._update.login, { secret: hashedSecret });

//             self._update.login = newLoginObject;
//             self._update.modified = new Date();

//             return next();
//         }).catch(function (err) {
//             log.error(err);
//             return next(err);
//         });
//     } else {
//         return next();
//     }
// })
UserSchema.statics.createAttrs = ['name', 'login', 'phone', 'mobile', 'email', 'company', 'isAdmin', 'settings'];
UserSchema.statics.updateAttrs = ['name', 'login', 'phone', 'mobile', 'email', 'company', 'isAdmin', 'settings'];
UserSchema.statics.populateAttrs = [];
module.exports = mongoose.model('User',UserSchema)