let express =  require('express');
let router = express.Router();
let User = require('../models/user');

// create
router.get('/new', (req, res) => {
    res.render('userForm');
});
router.post('/', (req, res, next) => {
    User.create(req.body, (err, user) => {
        if(err) return res.redirect('/users/new');
        res.redirect('/users');
    });
});

// read
router.get('/', (req, res, next) => {
    User.find({}, (err, users) => {
        if(err) return next(err);
        res.render('users', {users});
    });
});
router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('singleUser', {user});
    });
});

// update
router.get('/:id/edit', (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('editForm', {user}); 
    });
});
router.put('/:id', (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
        if(err) return next(err);
        res.redirect('/users/' + id);
    });
});

// delete
router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    User.findByIdAndDelete(id, (err, user) => {
        if(err) return next(err);
        res.redirect('/users');
    })
});

module.exports = router;