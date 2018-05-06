const express = require('express'),
      router = express.Router(),
      path = require('path'),
      config = require(path.normalize(`${__dirname}/../../config/credentials`)),
      textResponse = require(path.normalize(`${config.root}/utils/bsUtils`)).textResponse,
      renderError = require(path.normalize(`${config.root}/utils/bsUtils`)).renderError,
      Article = require('../models/sampleModel');

module.exports = (app) => app.use('/', router);

router.get('/', (req, res, next) => {
  // const articles = [new Article(), new Article()];
  res.render('homePage', {
    title: 'Bomdi Zane',
    stylesheet: '/css/homePage.min.css',
    // articles: articles
  });
});
