const express = require('express');
const router = express.Router();
const articles = require('./articles');
const article = require('./article');
const comments = require('./comments');
const addArticle = require('./addArticle');
const updateArticle = require('./updateArticle');
const deleteArticle = require('./deleteArticle');
const addComment = require('./addComment');

router.route('/').get(articles).post(addArticle);

router
  .route('/:articleId')
  .get(article)
  .post(updateArticle)
  .delete(deleteArticle);

router.route('/:articleId/comments').get(comments).post(addComment);

module.exports = router;
