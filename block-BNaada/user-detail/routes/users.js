let express = require('express');
let router = express.Router();
let User = require('../modules/user');

router.get('/new', (req, res) => {
    res.render('userForm');
});

router.post('/', (req, res) => {
    User.create(req.body, (err, createdUser) => {
        if(err) res.redirect('/users/new');
        res.redirect('/users'); 
    });
});

router.get('/', (req, res) => {
    console.log("Inside get");

    User.find({}, (err, users) => {
        if(err) return next(err);
        res.render('users', {users: users});
    });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if(err) return next(err);
        res.render('singleUser', {user: user});
    });
})

router.get('/:id/edit', (req, res) => {
    let id = req.params.id;
    // send a form to edit data 
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    // edit the data
});
router.delete('/:id', (req, res) => {
   let id =req.params.id;
   User.findByIdAndDelete(id, (err, deletedUser) =>  {
       if(err) return next(err);
       res.render();
   })
});

module.exports = router;