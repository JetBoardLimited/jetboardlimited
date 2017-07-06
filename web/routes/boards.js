'use strict';

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('boardList', {
        forumUrl: process.env.FORUM_URL,
    });
});

router.get('/:id', (req, res) => {
    const options = {
        board: req.params.id,
        forumUrl: process.env.FORUM_URL,
        disqusUrl: process.env.DISQUS_URL,
        serverHostUrl: process.env.SERVER_HOST_URL
    };

    res.render('boards/' + options.board, options);
});

module.exports = router;
