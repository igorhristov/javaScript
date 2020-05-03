const express = require('express');
const routes = express.Router();
const articles = require('./articles');
const article = require('./article');
const comments = require('./comments');

routes.get('/', articles);
routes.get('/:articleId', article);
routes.get('/:articleId/comments', comments);

module.exports = routes;
