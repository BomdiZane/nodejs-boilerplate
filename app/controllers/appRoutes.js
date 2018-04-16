const express = require('express'),
      router = express.Router(),
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
