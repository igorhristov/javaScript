const articles = require('../../data/articles.json');

module.exports = (req, res) => {
  const { page = 0 } = req.query;
  const ARTICLES_PER_PAGE = 10;

  res.json(
    articles.slice(+page * ARTICLES_PER_PAGE, ARTICLES_PER_PAGE * (+page + 1))
  );
};
