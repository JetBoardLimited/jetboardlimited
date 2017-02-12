'use strict';

const router = require('express').Router();
const proxy = require('express-http-proxy');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/boards', (req, res) => {
    res.render('boards');
});

router.get('/boards/:id', (req, res) => {
    const options = {
      board: req.params.id
    };

    res.render('board', options);
});

router.get('/forum', proxy('//localhost:4567'));

module.exports = router;
