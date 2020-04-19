const getArticles = () => Promise.resolve(data.articles);
const getArticleById = _id => {
    return Promise.resolve(data.articles.find(({ id }) => _id === id));
}
