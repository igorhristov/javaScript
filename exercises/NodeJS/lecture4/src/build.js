const renderHomepage = require('./helpers/renderHomepage');
const renderAllAuthors = require('./helpers/renderAllAuthors');

const run = async () => {
    await renderHomepage();
    await renderAllAuthors();
};
run();
