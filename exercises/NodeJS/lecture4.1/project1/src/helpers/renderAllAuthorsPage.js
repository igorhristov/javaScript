const Mustache = require('mustache');
const saveHtmlPage = require('./saveHtmlPage');
const { articles, authors, tags } = require('../data');
const homepageTpl = require('../templates/allAuthors');

module.exports = async () => {
  const output = Mustache.render(homepageTpl(), {
    authors
  });

  await saveHtmlPage('authors.html', output);
};
