const renderHomepage = require('./helpers/renderHomepage');
const renderTags = require('./helpers/renderTags');
const renderAllAuthorsPage = require('./helpers/renderAllAuthorsPage');
const renderAuthor = require('./helpers/renderAuthorPages');
const renderArticles = require('./helpers/renderArticles');

const run = async () => {
  await renderHomepage();
  await renderTags();
  await renderArticles();
  await renderAllAuthorsPage();
  await renderAuthor();
};

run();
