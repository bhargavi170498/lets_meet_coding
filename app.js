var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var index = require('./routes/index');
var users = require('./routes/users');
var u=require('./routes/user_login');
var communities=require('./routes/communities_tbl_routes');
var posts=require('./routes/posts_tbl_routes');
var likes=require('./routes/like_tbl_routes');
var comments=require('./routes/comment_tbl_routes');
var community_member=require('./routes/comm_member_tbl_routes');
var polls=require('./routes/posts_tbl_routes');
var categories=require('./routes/category_tbl_routes');
var user=require('./routes/user_tbl_routes');
var stories=require('./routes/story_tbl_routes');
var events=require('./routes/event_tbl_routes');
var feedbacks=require('./routes/feedback_tbl_routes');
var followers=require('./routes/follower_tbl_routes');
var rsvps=require('./routes/rsvp_tbl_routes');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/community',communities);
app.use('/post',posts);
app.use('/like',likes);
app.use('/comment',comments);
app.use('/comm_member',community_member);
app.use('/poll',polls);
app.use('/category',categories);
app.use('/user',user);
app.use('/login',u);
app.use('/story',stories);
app.use('/event',events);
app.use('/feedback',feedbacks);
app.use('/follower',followers);
app.use('/rsvp',rsvps);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
