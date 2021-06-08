let express = require('express');
let User = require('../modules/user');
let router = express.Router();

router.get('/', (req, res) => {
    res.render('user');
});

router.get('/new', (req, res) => {
    res.render('userForm');
});

router.post('/', (req, res) => {
     console.log('req.body');
     User.create(req.body, (err, createdUser) => {
         if (err) return res.redirect('/users/new');
         res.redirect('/');
     });
})

module.exports = router;