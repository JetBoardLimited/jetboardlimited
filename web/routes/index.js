'use strict';

const router = require('express').Router();

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

module.exports = router;
