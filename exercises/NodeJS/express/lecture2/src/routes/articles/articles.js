const articles = require('../../data/articles.json');

module.exports = (req, res) => {
    res.json(articles)
}