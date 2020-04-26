const createHeader = require('./createHeader');
const createFooter = require('./createFooter');
const createArticleCard = require('./createArticleCard');

module.exports = () => {
  const homepageHeader = createHeader();
  const homepageFooter = createFooter();
  const homepageCards = createArticleCard();
  return `
    ${homepageHeader}
    ${homepageCards}
    ${homepageFooter}`;
};
