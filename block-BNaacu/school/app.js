let PORT = 4000;

// require
let express = require('express');
let mongoose = require('mongoose');
let logger = require('morgan');

// database connection
mongoose.connect('mongodb://localhost/sample',
{useNewUrlParser: true, useUnifiedTopology: true},
(err) => {
    console.log(err ? err : 'connected: true');
});

// instantiate the app
let app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(logger('dev'));

// setup the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

// routing middlewares

app.use('/', require('./routes/index'));
app.use('/students', require('./routes/students'));

// error handler
app.use((req, res, next) => {
    res.status(404)/send('Page not found');
});
app.use((err, req, res, next) => {
    res.send(err);
});


// listener
app.listen(PORT, () => {
    console.log('server is listening to port ' + PORT);
});

