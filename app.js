var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jquery = require('jquery');
var routes = require('./routes/index');
var designs = require('./routes/designs');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use("/swupscroll", express.static(path.join(__dirname, "/node_modules/@swup/scroll-plugin/dist")));

app.use('/', routes);


// password middleware
const session = require('express-session');

//define middleware functions
let PP = {
  session: function(options) {
    console.log("CREATING PASSWORD SESSION...");
    return session({
      secret: 'passwordProtected',
      resave: false,
      saveUninitialized: true,
      unset: 'destroy',
      name: 'passwordProtected',
      cookie: {
          maxAge: (options.maxAge) ? options.maxAge : (1000 * 60 * 60 * 24) // default is 1 day
      }
    })
  },
  configure: function(options) {
    console.log("CONFIGURING PASSWORD...");
    return function(req, res, next) {
      if(!req.session.PP) {
        req.session.PP = {
          password: options.password,
          loggedIn: false
        }
      }
    next()
    }
  },
  login: function(req, res, next) {
    console.log("CHECKING PASSWORD...");
    // check if logged in using session, continue to other express routes in app
    if(req.session.PP && req.session.PP.loggedIn) {
      console.log("PASSWORD SESSION STILL ACTIVE");
      next();
    }
    // attempting to login using password protected login form; check username and password; if so, let proceed and save loggedIn as true
    else if(req.body && (req.body.PPP1 == req.session.PP.password)) {
      console.log("PASSWORD MATCHED");
      req.session.PP.loggedIn = true;
      // req.session.cookie.path = "/designs/comet-design-system";
      // console.log(req);
      // console.log(res);
      next();
      // app.use('/designs', designs);
    }
    // send error
    else if(req.body && req.body.PPP1) {
      console.log("PASSWORD WRONG");
      res.render('password-error');
    }
    // first time
    else {
      console.log("ASK FOR PASSWORD");
      res.render('password');
    }
  }
};

const passwordProtected = function(options) {
  return [bodyParser.urlencoded({extended: true}), PP.session(options), PP.configure(options), PP.login]
}

const config = {
  password: "atlas",
  maxAge: 20000000
}

app.use(function(request, response){
  if(!request.secure){
    response.redirect("https://" + request.headers.host + request.url);
  }
});



app.use('/about', function(req, res, next) {
  res.render('about');
});

app.use('/contact', function(req, res, next) {
  res.render('contact');
});


app.use(passwordProtected(config));

console.log("trying to route to design");




app.use(function(req, res, next) {
    next();
})

// password success


app.use('/designs/comet-design-system', function(req, res, next) {
  res.render('works/comet-design-system');
});

app.use('/designs/college-lol', function(req, res, next) {
  res.render('works/college-lol');
});

app.use('/designs/sales-life', function(req, res, next) {
  res.render('works/sales-life');
});

app.use('/designs/water-slide-estimator', function(req, res, next) {
  res.render('works/water-slide-estimator');
});

app.use('/designs/play-network', function(req, res, next) {
  res.render('works/play-network');
});

app.use('/designs/jenny-life', function(req, res, next) {
  res.render('works/jenny-life');
});

app.use('/designs/zambah', function(req, res, next) {
  res.render('works/zambah');
});

app.use('/designs/youcollab', function(req, res, next) {
  res.render('works/youcollab');
});

app.use('/designs/flatbook', function(req, res, next) {
  res.render('works/flatbook');
});

app.use('/designs/travelhacks', function(req, res, next) {
  res.render('works/travelhacks');
});


// app.use('/designs', designs);
console.log("failed to route to design");

// app.get('/designs/comet-design-system', function(req, res, next) {
//   res.render('works/comet-design-system');
// });


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
