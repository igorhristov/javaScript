const articles = require('../../data/articles.json');

module.exports = (req, res) => {
  const { articleId } = req.params;
  const article = articles.find(({ id }) => id === articleId);

  if (!article) {
    return res
      .status(404)
      .send(`The article with id ${articleId} is not found`);
  }

  const index = articles.indexOf(article);
  articles.splice(index, 1);

  res.json({ warning: `Article with id:${articleId} is Deleted`, article });
};
