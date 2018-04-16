const cluster = require('cluster'),
      express  = require('express'),
      path  = require('path'),
      bcrypt  = require('bcrypt'),
      passport  = require('passport'),
      helmet  = require('helmet'),
      hbs = require('express-handlebars'),
      expressSession = require('express-session'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      expressValidator = require('express-validator'),
      favicon = require('serve-favicon'),
      logger = require('morgan'),
      glob = require('glob'),
      compress = require('compression'),
      methodOverride = require('method-override'),
      renderError = require(`${config.root}/utils/bsUtils`).renderError;

module.exports = (app, config) => {
  const env = process.env.NODE_ENV || 'development';
  app.locals.ENV = env;
  app.locals.ENV_DEVELOPMENT = env == 'development';
  
  app.engine('handlebars', hbs({
    extname: 'hbs',
    layoutsDir: `${config.root}/app/views/layouts/`,
    defaultLayout: 'main',
    partialsDir: [`${config.root}/app/views/partials/`]
  }));
  app.set('views', `${config.root}/app/views`);
  app.set('view engine', 'hbs');

  app.use(helmet()); // Some header security
  app.use(favicon(`${config.root}/public/files/favicon.ico`));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cookieParser(config.security.cookieSecret));
  app.use(compress());
  app.use(express.static(`${config.root}/public`));
  app.use(methodOverride());
  app.use(expressValidator());
  app.use(expressSession({
    secret: config.security.sessionSecret,
    saveUninitialized: false,
    resave: false
  })); //NB...Memory session storage is not recommended for production
  app.use(passport.initialize());
  app.use(passport.session());
  app.use((req, res, next) => {
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
  });

  let controllers = glob.sync(`${config.root}/app/controllers/*.js`);
  controllers.forEach((controller) => {
    require(controller)(app);
  });

  // 404 catch-all handler
  router.use((req, res, next) => {
    res.render('404', {
          title: 'Not Found - Bomdi Zane',
          stylesheet: '/css/error.min.css',
      });
  });

  // 500 error handler
  if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
      console.error(err.stack);
      renderError(res);
    });
  }

  app.use((err, req, res, next) => renderError(res));

  return app;
};
