'use strict';

const router = require('express').Router();

router.get('/', (req, res) => {
    const options = {
      hostname: req.get('host')
    };

    res.render('index', options);
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

router.get('/lessons', (req, res) => {
    res.render('lessons');
});

module.exports = router;
