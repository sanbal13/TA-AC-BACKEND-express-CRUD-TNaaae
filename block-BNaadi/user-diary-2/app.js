const PORT = 4000;

// require
let express = require('express');
let mongoose = require('mongoose');
let logger = require('morgan');
let path = require('path');
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

// connet to the database
mongoose.connect('mongodb://localhost/user', 
                  {useNewUrlParser: true, useUnifiedTopology: true},
                   (err) => {
                       console.log('connected: ' + (err ? false : true));
                   });

// instantiate the app
let app = express();

// middlewares
app.use(express.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//route handlers
app.use('/', indexRouter);
app.use('/users', usersRouter);


// error handlers
app.use((req, res, next) => {
    res.statusCode(404).send('Page not Found')
});
app.use((err, req, res, next) => {
    res.send(err);
});

// listener
app.listen(PORT, () => {
    console.log('server is running on port ' + PORT);
});