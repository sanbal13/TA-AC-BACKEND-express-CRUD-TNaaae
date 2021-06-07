let PORT = 4000;

// require
let express = require('express');
let mongoose = require('mongoose');
let path = require('path');
let userRoute = require('./routes/users');
let indexRoute = require('./routes/index');
let logger = require('morgan');

// connect ot the database
mongoose.connect('mongodb://localhost/sample', 
                 {useNewUrlParser: true, useUnifiedTopology: true}, 
                 (err) => {
                     console.log('connected: ' + (err ? false : true));
                 });

// instantiate the app
let app = express();

// middlewares
app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname , 'public')));

// setup views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));                 

// route handlers
app.use('/', indexRoute);
app.use('/users', userRoute);

// error handler middleware
app.use((req, res, next) => {
    res.send('Page not Found');
});
app.use((err, req, res, next) => {
    res.send(err);
});

// listener
app.listen(PORT, () => {
    console.log('server is listening on port ' + PORT);
});