const tags = require('../../data/tags.json');

module.exports = (req, res) => {
  const { slug } = req.params;
  console.log(slug);
  res.json(tags[slug]);
};
