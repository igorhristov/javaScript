const Mustache = require('mustache');
const saveHtmlPage = require('./saveHtmlPage');
const { articles, authors, tags  } = require('../data');

const homepageTpl = require('../templates/homepage');

module.exports = async () => {
    const output = Mustache.render(homepageTpl(), {
        articles
    });

    await saveHtmlPage('index.html', output);
};
