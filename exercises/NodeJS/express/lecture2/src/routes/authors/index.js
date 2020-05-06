const express = require('express');
const router = express.Router();
const authors = require('./authors');
const author = require('./author');
const authorArticles = require('./authorArticles');
const addAuthor = require('./addAuthor');
const updateAuthor = require('./updateAuthor');
const deleteAuthor = require('./deleteAuthor');

router
    .route('/')
    .get(authors)
    .post(addAuthor);

router
    .route('/:authorId')
    .get(author)
    .post(updateAuthor)
    .delete(deleteAuthor);

router.get('/:authorId/articles', authorArticles);

module.exports = router;
