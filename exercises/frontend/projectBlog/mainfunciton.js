const getArticleByAuthor = (articles, authors) => {
    const authorsMapById = authors.reduce((acc, author) => {
      acc[author.id] = author;
      return acc;
    }, {});
    return articles.map(article => {
      const { id, title, summary, tags, date: articleDate } = article;
      const { id: authorId, name, avatar } = authorsMapById[article.authorId];
      const comments = data.comments.filter(({ articleId }) => articleId === id);
      return {
        id,
        title,
        comments,
        summary,
        avatar,
        name,
        authorId,
        date: new Date(articleDate).toDateString(),
        tags: tags.map(x => data.tags[x]),
        numberOfComments: comments.length + ' Comments'
      }
    });
  };