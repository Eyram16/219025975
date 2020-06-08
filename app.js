

const path = require('path');
const express = require('express');

const app = new express();
const mongoose = require('mongoose');

const UserPageController = require('./controllar/Createuser')







app.use(express.static('public'));
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
mongoose.connect('mongodb+srv://Malcomex:anaba_ex12@cluster0-qda0f.mongodb.net/goodhealthdb?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology:true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err))




    app.get('/',UserPageController);
        
         
  

const port = 3000;
app.listen(port, () => {
    console.log('App listening on port 3000')
});