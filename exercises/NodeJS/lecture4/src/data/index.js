const articles = require('./json/articles.json');
const tags = require('./json/tags.json');
const authors = require('./json/authors.json');
const comments = require('./json/comments.json');

const authorsHashMap = authors.reduce((acc, author) => {
    acc[author.id] = author;
    return acc;
}, {});
// console.log(authorsHashMap['889ace1d-15d0-4b97-a4ad-6e2b56917d77']);

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

// console.log(extendedArticles[0]);
const extendedAuthors = authors.map((author) => ({
    ...author,
    articles: extendedArticles.filter(({ authorId }) => authorId === author.id),
}));

// console.log(extendedAuthors[0]);

module.exports = {
    articles: extendedArticles,
    authors: extendedAuthors,
    tags: Object.keys(tags).map((slug) => ({
        slug,
        title: tags[slug],
    })),
};
