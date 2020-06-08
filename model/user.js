const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    Lastname: {
        type: String,
        required: true,
        
    },
    Dateofbirth: {
        type: Date,
        required: true
    },
    Contactphonenumber: {
        type:Number,
        required:true
    },
    Residentialaddress: {
        type:String,
        required:true
    },
    emergencynumber: {
        type:Number,
        required:true
    }

})

UserSchema.pre('save', function (next) {
    const user = this

    next()
})

module.exports = mongoose.model('User', UserSchema)