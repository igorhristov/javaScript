const articles = require('../../data/articles.json');
const { v4: uuidv4 } = require('uuid');

module.exports = (req, res) => {
  const { authorId, title, summary, body, tags } = req.body;
  if (!authorId) {
    throw new Error('Author ID is required');
  }
  if (!title || title.length < 3) {
    throw new Error('Invalid article title');
  }
  if (!summary || summary.length < 20) {
    throw new Error('Invalid article summary');
  }
  if (!body || body.length < 50) {
    throw new Error('Invalid article body');
  }
  if (!tags || tags.length < 1) {
    throw new Error('Invalid article tags');
  }

  const newDate = new Date(Date.now());
  const article = {
    date: newDate,
    id: uuidv4(), // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    authorId,
    title,
    summary,
    body,
    tags
  };
  res.json(article);
};
