const express = require('express');
const router = express.Router();
const articles = require('./articles');
const article = require('./article');
const comments = require('./comments');
const createArticle = require('./createArticle');
const updateArticle = require('./updateArticle');

// router.get('/', articles);
// router.get('/:articleId', article);
router.get('/:articleId/comments', comments);

// router.post('/', createArticle);
// router.post('/:articleId', updateArticle)

router.route('/').get(articles).post(createArticle);
router.route('/:articleId').get(article).post(updateArticle);

module.exports = router;
