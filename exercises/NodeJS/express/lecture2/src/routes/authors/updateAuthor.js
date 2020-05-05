const authors = require('../../data/authors.json');

module.exports = (req, res) => {
  const { authorId } = req.params;

  res.json('author UPDATE treba da ima tuka na: ' + authorId);
};
