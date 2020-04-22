const Mustache = require('mustache');
const saveHtmlPage = require('./saveHtmlPage');
const { articles } = require('../data');

const homePageTpl = require('../templates/homepage');

module.exports = async () => {
    const output = Mustache.render(homePageTpl(), {
        articles,
    });

    await saveHtmlPage('index.html', output);
};
