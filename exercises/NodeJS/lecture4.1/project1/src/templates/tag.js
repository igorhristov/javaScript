const createHeader = require('./createHeader');
const createFooter = require('./createFooter');
const createArticleCard = require('./createArticleCard');

module.exports = tag => {
  const title = `Showing articles tagged as ${tag.title}`;

  const homepageHeader = createHeader(title);
  const homepageFooter = createFooter();
  const tagArticleCard = createArticleCard();

  return `
    ${homepageHeader}
    <h3 class="text-center">there are:{{articles.length}} ${tag.title} articles </h3>
    ${tagArticleCard}
    ${homepageFooter}`;
};
