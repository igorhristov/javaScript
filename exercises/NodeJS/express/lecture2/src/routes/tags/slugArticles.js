const articles = require('../../data/articles.json');

module.exports = (req, res) => {
  const { slug } = req.params;
  const { page = 0 } = req.query;
  const ARTICLES_PER_PAGE = 10;
  
  res.json(
    articles
      .filter(article => article.tags.includes(slug))
      .slice(+page * ARTICLES_PER_PAGE, ARTICLES_PER_PAGE * (+page + 1))
  );
};
