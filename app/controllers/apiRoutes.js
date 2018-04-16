const express = require('express'),
      router = express.Router(),
      Article = require('../models/sampleModel');

module.exports = (app) => app.use('/api', router);

router.get('/', (req, res, next) => {
  const articles = [new Article(), new Article()];
  res.render('index', {
    title: 'Generator-Express MVC',
    articles: articles
  });
});
