// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

var axios = require('axios')
// var apiRoutes = express.Router()

// apiRoutes.get('/getRecommend', function (req, res) {
//   var url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

//   axios.get(url, {
//     headers: {
//       referer: 'https://y.qq.com/m/index.html'
//     },
//     params: req.query
//   }).then((response => {
//     res.json(response.data) // send [response] from axios to client end as [res]
//   }).catch(e => {
//     console.log(e)
//   }))
// })
// app.use('/api',apiRoutes)

// app.get("/random/:min/:max", function(req, res) {
//   var min = parseInt(req.params.min);
//   var max = parseInt(req.params.max);
//   if (isNaN(min) || isNaN(max)) {
//       res.status(400);
//       res.json({ error: "Bad request." });
//       return;
//   }

//   var result = Math.round((Math.random() * (max - min)) + min);
//   res.json({ result: result });
// });
// // view engine setup  
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// //app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.resolve(__dirname, '../dists')));
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

var express = require("express");
var app = express();

app.get("/random/:min/:max", function(req, res) {
    var min = parseInt(req.params.min);
    var max = parseInt(req.params.max);
    if (isNaN(min) || isNaN(max)) {
        res.status(400);
        res.json({ error: "Bad request." });
        return;
    }

    var result = Math.round((Math.random() * (max - min)) + min);
    res.json({ result: result });
});



app.get('/getRecommend', function (req, res) {
  var url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  axios.get(url, {
    headers: {
      referer: 'https://y.qq.com/m/index.html'
    },
    params: req.query
  }).then(response => {
    res.json(response.data) // send [response] from axios to client end as [res]
  }).catch(e => {
    console.log(e)
  })
})

module.exports = app;