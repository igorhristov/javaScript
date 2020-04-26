const renderHomepage = require('./helpers/renderHomepage');
const renderTags = require('./helpers/renderTags');
const renderAllAuthorsPage = require('./helpers/renderAllAuthorsPage');
const renderAuthor = require('./helpers/renderAuthorPages');
const renderArticles = require('./helpers/renderArticles');

const run = async () => {
  //
  // Create homepage
  //
  await renderHomepage();

  //
  // Create tag pages
  //
  await renderTags();
  await renderArticles();
  //
  // Create other pages (article, author, authors ...)
  //
  await renderAllAuthorsPage();

  await renderAuthor();
};

run();
