const renderHomepage = require('./helpers/renderHomepage');
const renderTags = require('./helpers/renderTags');

const run = async () => {
  //
  // Create homepage
  //
  await renderHomepage();

  //
  // Create tag pages
  //
  await renderTags();

  //
  // Create other pages (article, author, authors ...)
  //
};

run();
