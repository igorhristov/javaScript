const express = require('express');
const router = express.Router();
const articles = require('./articles');
const article = require('./article');
const comments = require('./comments');

router.get('/', articles);
router.get('/:articleId', article);
router.get('/:articleId/comments', comments);

module.exports = router;
