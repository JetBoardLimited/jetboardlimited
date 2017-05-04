'use strict';

const router = require('express').Router();

router.get('/', (req, res) => {
    res.redirect('https://49298757.ngrok.io');
});

module.exports = router;
