const payment = require('./model/payment')

module.exports = (req, res) => {
    payment.create(req.body, (error, payment) => {
        if (error) {
            return res.redirect('/')
        }
        res.redirect('/')
    })
}