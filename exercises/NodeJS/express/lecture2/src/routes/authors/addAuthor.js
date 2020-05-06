const authors = require('../../data/authors.json');
const { v4: uuidv4 } = require('uuid');

module.exports = (req, res) => {
  const { name, avatar, email, username, website, bio } = req.body;

  if (!name || name.length < 3) {
    throw new Error('Invalid author name');
  }
  if (!avatar) {
    throw new Error('Invalid author avatar');
  }
  if (!email || email.length < 3) {
    throw new Error('Invalid author body');
  }
  if (!username || username < 3) {
    throw new Error('Invalid author username');
  }
  if (!website || website.length < 5) {
    throw new Error('Invalid author website');
  }
  if (!bio || bio.length < 20) {
    throw new Error('Invalid author bio');
  }
  
  const author = {
    id: uuidv4(), // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    name,
    avatar,
    email,
    username,
    website,
    bio
  };
  authors.push(author)
  res.json({"how many authors": authors.length ,author});
};
