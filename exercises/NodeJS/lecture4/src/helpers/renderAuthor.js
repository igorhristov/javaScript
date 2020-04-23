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
                authors 
                // articles: articles.filter(articles.id === a),
                
            });
        
            await saveHtmlPage(`author-${id}.html`, output);
    

    // );
    
};
