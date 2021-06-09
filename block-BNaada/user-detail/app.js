let PORT = 4000;

const { urlencoded } = require('express');
// require
let express = require('express');
let mongoose = require('mongoose');
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let logger = require('morgan');
let path = require('path');

// connect to the database
mongoose.connect('mongodb://localhost/user-details', 
                 {useNewUrlParser: true, useUnifiedTopology: true},
                 (err) => {
                     console.log('connected: ' + (err ? false: true));
                 });

// instantiate the app
let app = express();

// middlewares
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// route handler
app.use('/', indexRouter);
app.use('/users', usersRouter);

// error handler
app.use((req, res, next) => {
    res.send('Page not found');
});
app.use((err, req, res, next) => {
    res.send(err);
});

// listener
app.listen(PORT, () => {
    console.log('server is listening on port ' + PORT);
});