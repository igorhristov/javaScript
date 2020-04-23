const Mustache = require('mustache');
const saveHtmlPage = require('./saveHtmlPage');
const { articles, authors, tags } = require('../data');

const authorTpl = require('../templates/author');
// console.log(articles);

module.exports = async () => {
    // return Promise.all(
        // const authorArticlesFilter = articles.filter(article => {
        //     return article.authorId === author.id;
        // })
    const output = Mustache.render(authorTpl(), {
        articles: articles.filter(({articlesArr}) => articlesArr.includes(authorId))
    });

    await saveHtmlPage(`author-${id}.html`, output);

    // );
    
};
