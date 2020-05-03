const express = require('express');
const routes = express.Router();
const authors = require('./authors');

routes.get('/', authors);

module.exports = routes;