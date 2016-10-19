'use strict';

const express = require('express');
const stylus = require('stylus');
const logger = require('morgan');
const path = require('path');

// Routers
const indexRouter = require('./routes/index');

const app = express();
const dev = (app.get('env') === 'development');

// Make the HTML output pretty in development.
app.locals.pretty = dev;

// Set template engine to jade/pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views', 'templates'));

// Stylus middleware
app.use(stylus.middleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    compile: (str, path, fn) => {
        stylus(str)
        .set('filename', path)
        .set('compress', true)
        .render(fn);
    }
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use('/', indexRouter);

// Error handler: 404 handler.
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

const PORT = 8080;
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
