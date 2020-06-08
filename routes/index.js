const express = require('express');
const router = express.Router();
const User = require('../model/User')


router.get('/', (req, res)=>{
    res.render('home')
});


router.get('/register', (req, res)=>{
    res.render('registration');
});

router.post('/register', (req, res)=>{
    const registrationData = {
        name: req.body.name,
        password: req.body.password,
        date_of_birth : req.body.date_of_birth,
        age: req.body.age,
        contact: req.body.contact,
        emegerence_contact: req.body.emegerence_contact
    }
    User.findOne({fullName: registrationData.fullName}).then((user)=>{
        if(user){
            console.log('Sorry there is a patient  with that Name please check it and try again');
            return res.redirect('/register')
        } else {
            User.create(registrationData).then((newUser)=>{
                res.redirect('/patients')
            })
        }
    })
});


router.get('/patients', (req, res)=>{
    User.find({}).then((users)=>{
        res.render('patients', {
            users: users.reverse()
        })
    }).catch((error)=>{
        res.json({
            msg: `Sorry ${error.message}`
        })
    });
})



module.exports = router;
