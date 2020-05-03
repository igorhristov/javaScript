const express = require('express');
const routes = express.Router();
const articles = require('./articles');

routes.get('/', articles);

module.exports = routes;