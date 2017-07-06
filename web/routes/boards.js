'use strict';

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('boardList');
});

router.get('/:id', (req, res) => {
    const options = {
      board: req.params.id,
      disqusUrl: process.env.DISQUS_URL,
      serverHostUrl: process.env.SERVER_HOST_URL
    };

    res.render('boards/' + options.board, options);
});

module.exports = router;
