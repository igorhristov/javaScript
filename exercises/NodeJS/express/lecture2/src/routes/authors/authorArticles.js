const articles = require('../../data/articles.json');

module.exports = (req, res) => {
  const { authorId } = req.params;
  
  res.json(articles.filter(article => article.authorId === authorId));
};
