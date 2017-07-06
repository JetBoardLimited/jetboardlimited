'use strict';

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('about', {
        forumUrl: process.env.FORUM_URL,
    });
});

module.exports = router;
