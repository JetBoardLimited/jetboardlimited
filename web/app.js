'use strict';

const fs = require('fs');
const nib = require('nib');
const path = require('path');
const stylus = require('stylus');
const morgan = require('morgan');
const express = require('express');
const winston = require('winston');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Routers
const indexRouter = require('./routes/index');
const forumRouter = require('./routes/forum');
const boardsRouter = require('./routes/boards');
const lessonsRouter = require('./routes/lessons');
const aboutRouter = require('./routes/about');
const partnershipsRouter = require('./routes/partnerships');

// Express
const app = express();
const dev = (app.get('env') === 'development');

// Make the HTML output pretty in development.
app.locals.pretty = dev;

if (dev) {
    // Just output to console only.
    app.use(morgan('dev'));
} else {
    // Create a write stream (in append mode)
    const accessLogStream = fs.createWriteStream(
        path.join(__dirname, 'logs', 'access.log'),
        { flags: 'a' }
    );

    app.use(morgan('common', {stream: accessLogStream}));
}

// Setup winston logger.
winston.add(winston.transports.File, {
    filename: path.join('logs', 'app.log'),
    handleExceptions: true,
    humanReadableUnhandledException: true
});

// Set template engine to jade/pug.
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views', 'templates'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Parse cookies
app.use(cookieParser());

// Stylus middleware
app.use(stylus.middleware({
    src: path.join(__dirname, 'views'),
    dest: path.join(__dirname, 'public'),
    compile: (str, path) => {
        return stylus(str)
        .set('filename', path)
        .set('compress', true)
        .use(nib());
    }
}));

// Set base directory for path requests
app.use(express.static(path.join(__dirname, 'public')));

// Use indexRouter
app.use('/', indexRouter);
app.use('/forum', forumRouter);
app.use('/about', aboutRouter);
app.use('/boards', boardsRouter);
app.use('/lessons', lessonsRouter);
app.use('/partnerships', partnershipsRouter);

// Error handler: 404 handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handler: No stacktraces leaked to user production mode.
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(dev ? err : {});
});

module.exports = app;