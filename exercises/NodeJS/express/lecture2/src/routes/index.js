const express = require('express');
const routes = express.Router();
const articles = require('./articles');
const authors = require('./authors');
const tags = require('./tags');

routes.use('/articles', articles);
routes.use('/authors', authors);
routes.use('/tags', tags);

routes.get('/', (req, res) => {
    res.status(200).json({message: 'Connected!'})
})

module.exports = routes;
