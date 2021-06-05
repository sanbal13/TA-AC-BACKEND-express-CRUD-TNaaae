let express = require('express');
let router = express.Router();

router.get('/new', (req, res) => {
    res.render('studentForm');
});

router.post('/', (req, res) => {
   res.send(req.body); 
});
router.get('/', (req, res) => {
    res.render('students', {list: ['ankit', 'suraj', 'prashant', 'ravi']});
});
router.get('/:id', (req, res) => {
    student = {name: 'rahul', email: 'rahul@altcampus.io'};
    res.render('studentDetail', {student: student});
})

module.exports = router;
