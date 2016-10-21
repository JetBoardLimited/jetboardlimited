'use strict';

const express = require('express');
const stylus = require('stylus');
const morgan = require('morgan');
const winston = require('winston');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');

const path = require('path');

// Routers
const indexRouter = require('./routes/index');

// Express
const server = express();
const dev = (server.get('env') === 'development');

// Make the HTML output pretty in development.
server.locals.pretty = dev;

// Setup morgan logger.
if (server.get('env') === 'development') {
    server.use(morgan('dev'));  
} else if (server.get('env') === 'production') {

    // Create a write stream (in append mode) 
    const accessLogStream = fs.createWriteStream(
        path.join(__dirname, 'logs', 'access.log'),
        { flags: 'a' }
    );

    server.use(morgan('common', {stream: accessLogStream}));
}

// Setup winston logger.
winston.add(winston.transports.File, {
    filename: path.join('logs', 'server.log'),
    handleExceptions: true,
    humanReadableUnhandledException: true
});

// Set template engine to jade/pug.
server.set('view engine', 'pug');
server.set('views', path.join(__dirname, 'views', 'templates'));

// Parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
server.use(bodyParser.json());

// Parse cookies
server.use(cookieParser());

// Stylus middleware
server.use(stylus.middleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    compile: (str, path, fn) => {
        stylus(str)
        .set('filename', path)
        .set('compress', true)
        .render(fn);
    }
}));

// Set base directory for path requests
server.use(express.static(path.join(__dirname, 'public')));

// Use indexRouter
server.use('/', indexRouter);

// Error handler: 404 handler
server.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handler: No stacktraces leaked to user production mode.
server.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(dev ? err : {});
});

module.exports = server;