var createError = require('http-errors');
var express = require('express');
var path = require('path');
var morganLoger = require('morgan');

var indexRouter = require('./routes/index.routes');
var ticketRouter = require('./routes/post.routes');

var app = express();

app.use(morganLoger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/api/v1/tickets', ticketRouter);


console.log('test');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

/**
 * A post by id
 */
app.use(function(err, req, res, next) {

	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
