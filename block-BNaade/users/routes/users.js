let express = require('express');
let router = express.Router();
let User = require('../models/user');

// create
router.get('/new', (req, res) => {
    res.render('userForm');
});

router.post('/', (req, res) => {
    User.create(req.body, (err, createdUser) => {
        if(err) return res.redirect('/users/new');
        res.redirect('/users');
    });
});

// read
router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if(err) return next(err);
        res.render('usersDetail', {users: users});
    });
});
router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('singleUserDetail', {user: user});
    });   
});

// update
router.get('/:id/edit', (req, res) => {
      let id = req.params.id;
      User.findById(id, (err, user) => {
          if(err) return next(err);
          res.render('editUserForm', {user: user});
      })     
});
router.post('/:id', (req, res) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
        if(err) return next(err);
        res.redirect('/users');
    });
});

module.exports = router;