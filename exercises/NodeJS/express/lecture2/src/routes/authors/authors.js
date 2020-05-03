const authors = require('../../data/authors.json');

module.exports = (req, res) => {
  const { page = 0 } = req.query;
  const AUTHORS_PER_PAGE = 10;

  res.json(
    authors.slice(+page * AUTHORS_PER_PAGE, AUTHORS_PER_PAGE * (+page + 1))
  );
};
