const getAuthors = () => Promise.resolve(data.authors);
const getAuthorById = _id => {
    return Promise.resolve(data.authors.find(({ id }) => _id === id));
}
