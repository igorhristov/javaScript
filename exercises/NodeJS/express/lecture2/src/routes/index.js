const express = require('express');
const router = express.Router();
const articles = require('./articles');
const authors = require('./authors');
const tags = require('./tags');

router.use('/articles', articles);
router.use('/authors', authors);
router.use('/tags', tags);

router
  .route('/')
  .get((req, res) => {
    res.status(200).json({ message: 'Get somthing!' });
  })
  .post((req, res) => {
    console.log(req.body);
    res
      .status(200)
      .json({ status: 'Add new with Post', data: { body: req.body } });
  })
  .delete((req, res) => {
    res
      .status(200)
      .json({ message: 'Delete some article or author with DELETE!' });
  });

module.exports = router;
