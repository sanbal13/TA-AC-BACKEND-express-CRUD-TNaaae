let PORT = 4000;

// require
let express = require('express');
let mongoose = require('mongoose');
let logger = require('morgan');
let path = require('path');

//database connection
mongoose.connect('mongodb://localhost/sample', 
{ useNewUrlParser: true, useUnifiedTopology: true },
(err) => {
    console.log(err ? err : 'connected: true');
});

// instantiate the app
let school = express();

// middlewares
school.use(express.json());
school.use(express.urlencoded({extended: false}));
school.use(logger('dev'));

// setup view engine
school.set('view engine', 'ejs');
school.set('views', path.join(__dirname, 'views'));

school.use((req, res, next) => {
    res.locals.framework = "Express";
    next();
});

//routes
school.get('/', (req, res) => {
    res.render('index', {name: "altCampus"});
});
school.get('/about', (req, res) => {
    let user = {name: 'User 1', age: 26, gender: 'Male'};
    res.render('about', {user: user});
});

// listener
school.listen(PORT, () => {
    console.log('server is listening on port ' + PORT);
});

