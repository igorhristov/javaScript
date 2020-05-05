const articles = require('../../data/articles.json')

module.exports = (req, res) => {
    const { articleId } = req.params;
  
    res.json('article UPDATE treba da ima tuka na: ' + articleId);
  };
  