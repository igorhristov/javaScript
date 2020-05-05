const comments = require('../../data/comments.json');
const { v4: uuidv4 } = require('uuid');

module.exports = (req, res) => {
  const { articleId } = req.params;

  const { userId, body } = req.body;

  if (!articleId) {
    throw new Error('Article ID is required');
  }
  
  if (!userId) {
    userId = uuidv4();
  }

  if (!body || body.length < 35) {
    throw new Error('Invalid article body');
  }

  const newDate = new Date(Date.now());
  const comment = {
    id: uuidv4(), // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    articleId,
    userId,
    date: newDate,
    body
  };
  res.json(comment);
};

/*
{
		"id": "8d3e2257-10e0-4636-a03d-da423369b4f1",
		"articleId": "bd697dfa-5940-4378-86e8-894bfedf1d98",
		"userId": "0845be53-ec04-4a41-8205-30901494498e",
		"date": "2020-02-17T07:17:07.219Z",
		"body": "Facere debitis sequi voluptates debitis ut sit et earum. Quis velit neque eos dolor alias eum. Sint est quo. Itaque consequatur maiores minima.<br>Et sunt quasi et. Officia est ratione quae dolor labore autem at. Vero dolorem est corporis velit. Aut mollitia libero officiis.<br>Pariatur reiciendis ut repudiandae incidunt quod non veniam. Eius fugit consequatur eveniet. Ea voluptas debitis. Debitis natus eligendi sit sed."
	}
*/
