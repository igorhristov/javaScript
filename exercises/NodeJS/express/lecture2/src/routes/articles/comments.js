const comments = require('../../data/comments.json');

module.exports = (req, res) => {
  const { articleId } = req.params;

  res.json(comments.filter(comment => comment.articleId === articleId));
};
