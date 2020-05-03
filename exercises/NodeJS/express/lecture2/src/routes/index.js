const express = require('express');
const routes = express.Router();
const articles = require('./articles');

routes.use('/articles', articles)

routes.get('/', (req, res) => {
    res.status(200).json({message: 'Connected!'})
})

module.exports = routes;