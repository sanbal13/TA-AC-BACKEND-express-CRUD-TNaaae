let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    let users = ['Prashant', 'Suraj', 'Ankit', 'Ravi'];
    res.render('usersAll', {users: users});
});
router.get('/new', (req, res) => {
    res.render('userForm');
});
router.get('/:id', (req, res) => {
    let user = {name: 'Suraj', age: 27, email: 'suraj@email.com'};
    res.render('singleUser', {user: user});
});

router.post('/', (req, res) => {
    res.render('user');
});
router.delete('/:id', (req, res) => {
    res.render('deleteUser');
});
router.get('/:id/edit', (req, res) => {
    res.render('updateForm');
});
router.put('/', (req, res) => {
    res.render('updateUser');
});

module.exports = router;