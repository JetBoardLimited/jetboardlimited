'use strict';

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('partnerships');
});

module.exports = router;
