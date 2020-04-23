const articles = require('./json/articles.json');
const tags = require('./json/tags.json');
const authors = require('./json/authors.json');
const comments = require('./json/comments.json');

const authorsHashMap = authors.reduce((acc, author) => {
    acc[author.id] = author;
    return acc;
}, {});
// console.log(authorsHashMap);

const extendedComments = comments.map((comment) => ({
    ...comment,
    author: authorsHashMap[comment.userId],
}));

// console.log(extendedComments);

const extendedArticles = articles.map((article) => ({
    ...article,
    comments: extendedComments.filter(({ articleId }) => articleId === article.id),
    author: authorsHashMap[article.authorId],
    tagsArr: article.tags,
    tags: article.tags.map((slug) => ({
        slug,
        title: tags[slug],
    })),
}));

// console.log(extendedArticles.length);
// console.log(extendedArticles[0]);
const extendedAuthors = authors.map((author) => ({
    ...author,
    articles: extendedArticles.filter(({ authorId }) => authorId === author.id),
}));

// console.log(extendedAuthors[5]);

// console.log(extendedAuthors.length);
// console.log(extendedAuthors[5].articles.length);

// console.log(extendedAuthors[5]);

module.exports = {
    articles: extendedArticles,
    authors: extendedAuthors,
    tags: Object.keys(tags).map((slug) => ({
        slug,
        title: tags[slug],
    })),
};


