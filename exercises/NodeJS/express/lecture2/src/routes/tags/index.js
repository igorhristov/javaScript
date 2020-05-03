const express = require('express');
const routes = express.Router();
const tags = require('./tags');
const slug = require('./slug');
const slugArticles = require('./slugArticles');

routes.get('/', tags);
routes.get('/:slug', slug);
routes.get('/:slug/articles', slugArticles);

module.exports = routes;