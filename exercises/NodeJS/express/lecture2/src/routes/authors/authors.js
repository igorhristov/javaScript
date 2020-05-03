const authors = require('../../data/authors.json');

module.exports = (req, res) => {
    res.json(authors)
}