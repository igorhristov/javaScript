const express = require('express');
const routes = express.Router();
const tags = require('./tags');
const slug = require('./slug');

routes.use('/', tags);
routes.use('/', slug);

module.exports = routes;