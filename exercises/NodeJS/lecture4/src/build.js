const renderHomepage = require('./helpers/renderHomepage');
const renderAllAuthors = require('./helpers/renderAllAuthors');
const renderTags = require('./helpers/renderTags');
const renderAuthor = require('./helpers/renderAuthor');

const run = async () => {
    // await renderHomepage();
    // await renderAllAuthors();
    // await renderTags();
    await renderAuthor();
};
run();
