const Mustache = require('mustache');
const saveHtmlPage = require('./saveHtmlPage');
const {articles, authors, tags} = require('../data');

const allAuthorsTpl = require('../templates/allAuthors');

module.exports = async () => {
    const output = Mustache.render(allAuthorsTpl(), {
        authors
    })

    await saveHtmlPage('authors.html', output);
}