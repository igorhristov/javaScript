const Mustache = require('mustache');
const saveHtmlPage = require('./saveHtmlPage');
const { articles, authors, tags } = require('../data');

const authorTpl = require('../templates/author');

module.exports = async () => {
  return Promise.all(
    authors.map(author => {
      const { id } = author;
      const output = Mustache.render(authorTpl(author), {
        author: author
      });

      return saveHtmlPage(`author-${id}.html`, output);
    })
  );
};
