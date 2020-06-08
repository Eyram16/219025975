const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema({
    
    paymentdate: {
        type: Date,
        required: true
    },
    Amountpaid: {
        type:Number,
        required:true
    },
    Balanceamount: {
        type:Number,
        required:true
    },
    
})

UserSchema.pre('save', function (next) {
    const user = this

    next()
})

module.exports = mongoose.model('Payment', PaymentSchema)