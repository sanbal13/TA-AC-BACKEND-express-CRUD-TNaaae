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
let app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger('dev'));

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
    res.locals.framework = "Express";
    next();
});

//routes
app.get('/', (req, res) => {
    res.render('index', {name: "altCampus"});
});
app.get('/about', (req, res) => {
    let user = {name: 'User 1', age: 26, gender: 'Male'};
    res.render('about', {user: user});
});

// listener
app.listen(PORT, () => {
    console.log('server is listening on port ' + PORT);
});

