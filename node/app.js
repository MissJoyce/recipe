var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieSession = require("cookie-session");
var cors = require("cors");


var index = require('./routes/index');
var users = require('./routes/users');
var reg = require("./routes/reg")
var buycart = require("./routes/buycart");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieSession({
  keys:["aa","bb"],
  name:"joyce",
  maxAge:1000*60*60*24
}))

//配置cors中间件
app.use(cors({
  "origin": ["http://localhost:8808","http://localhost:8001","http://localhost:8080"],  //允许所有前端域名
  "credentials":true,   //跨源凭证
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
  "allowedHeaders":['Content-Type','Authorization']//被允许的post方式的请求头
}));

app.use('/', index);
app.use('/users', users);
app.use("/reg",reg);
app.use("/buycart",buycart);

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
