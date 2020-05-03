const articles = require('../../data/articles.json');

module.exports = (req, res) => {
  const { articleId } = req.params;

  res.json(articles.find(({ id }) => id === articleId));
};
