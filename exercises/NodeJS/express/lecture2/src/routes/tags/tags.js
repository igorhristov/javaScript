const tags = require('../../data/tags.json');

module.exports = (req, res) => {
    res.json(tags)
}