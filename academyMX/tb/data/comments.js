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

