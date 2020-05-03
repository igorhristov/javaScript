const express = require('express');
const routes = express.Router();
const authors = require('./authors');
const author = require('./author');
const authorArticles = require('./authorArticles');

routes.get('/', authors);
routes.get('/:authorId', author);
routes.get('/:authorId/articles', authorArticles);

module.exports = routes;