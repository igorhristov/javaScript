const Mustache = require('mustache');
const saveHtmlPage = require('./saveHtmlPage');
const { articles, tags } = require('../data');

const tagTpl = require('../templates/tag');

module.exports = async () => {
  return Promise.all(
    tags.map(tag => {
      const { slug } = tag;
      const output = Mustache.render(tagTpl(tag), {
        articles: articles.filter(({ tagsArr }) => tagsArr.includes(slug))
      });

      return saveHtmlPage(`tag-${slug}.html`, output);
    })
  );
};
