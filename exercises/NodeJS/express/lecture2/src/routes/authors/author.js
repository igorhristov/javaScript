const authors = require('../../data/authors.json');

module.exports = (req, res) => {
  const { authorId } = req.params;
  
  res.json(authors.find(({ id }) => id === authorId));
};
