// const getTags = () => Promise.resolve(data.tags);
/*
const getComments = () => Promise.resolve(data.comments);
const getCommentById = _id => {
    return Promise.resolve(data.comments.find(({ id }) => _id === id));
}

const getCommentsByArticleId = articleId => {
	return Promise.resolve(
		data.comments.filter(comment => {
			return comment.articleId === articleId
		})
	)
}

const getAuthors = () => Promise.resolve(data.authors);
const getAuthorById = _id => {
    return Promise.resolve(data.authors.find(({ id }) => _id === id));
}


const getArticles = () => Promise.resolve(data.articles);
const getArticleById = _id => {
    return Promise.resolve(data.articles.find(({ id }) => _id === id));
}

*/

const BLOG = async () => {
    const articles = await getArticles();
    console.log(articles[0]);

}
BLOG();
