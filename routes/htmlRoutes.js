const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {
        title: 'Raymond Min Song'
    })
});

router.get('/about', function (req, res) {
    res.render('about', {
        title: 'Bio'
    })
});

router.get('/contact', function (req, res) {
    res.render('contact', {
        title: 'Contact Raymond Song'
    })
});


module.exports = router;