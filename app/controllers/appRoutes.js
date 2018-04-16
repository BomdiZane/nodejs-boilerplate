const express = require('express'),
      router = express.Router(),
      Article = require('../models/article');

module.exports = (app) => app.use('/', router);

router.get('/', (req, res, next) => {
  const articles = [new Article(), new Article()];
  res.render('homePage', {
    title: 'Bomdi Zane',
    articles: articles
  });
});
