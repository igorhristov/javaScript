const NEWTABLE = async _ => {
  let sortOrder = 'asc';
  let sortBy = 'id';
  let currentPage = 0;
  await createTable(sortOrder, sortBy, currentPage);
  document.getElementById('root').addEventListener('click', async event => {
    if (event.target.matches('.footBtn')) {
      event.target.id === 'footer-page-btn-next' ? currentPage++ : currentPage--;
      await createTable(sortOrder, sortBy, currentPage);
    }
    if (event.target.className === 'sortable') {
      sortBy = event.target.id.replace('column-head-', '');
      sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
      await createTable(sortOrder, sortBy, currentPage);
    }
  });
};
NEWTABLE();
