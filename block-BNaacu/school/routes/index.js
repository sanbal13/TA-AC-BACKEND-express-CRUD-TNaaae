let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {page: 'Index'});
});

router.get('/about', (req, res) => {
    res.render('index', {page: 'About'});
});

module.exports = router;