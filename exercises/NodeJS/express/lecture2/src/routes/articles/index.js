const express = require('express');
const router = express.Router();
const articles = require('./articles');
const article = require('./article');
const comments = require('./comments');
const createArticle = require('./createArticle');

// router.get('/', articles);
router.get('/:articleId', article);
router.get('/:articleId/comments', comments);

// router.post('/', createArticle);

router.route('/').get(articles).post(createArticle);


module.exports = router;
/*
app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })
  */
