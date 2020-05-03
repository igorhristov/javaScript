const tags = require('../../data/tags.json');

module.exports = (req, res) => {
  const { slug } = req.params;

  res.json(tags[slug]);
};
