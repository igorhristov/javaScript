const Mustache = require('mustache');
const saveHtmlPage = require('./saveHtmlPage');
const { articles, authors, tags } = require('../data');

const articleTpl = require('../templates/article');

module.exports = async () => {
  return Promise.all(
    articles.map(article => {
      const { id } = article;
      const output = Mustache.render(articleTpl(article), {
        article: article
      });

      return saveHtmlPage(`article-${id}.html`, output);
    })
  );
};
