'use strict';

const router = require('express').Router();

router.get('/forum', (req, res) => {
    res.redirect('localhost:4567');
});

module.exports = router;
