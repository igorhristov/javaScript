const runTable = async () => {
  let currentPage = 0;
  await napraviTabela(currentPage);
  document.querySelector('#root').addEventListener('click', async event => {
    if (event.target.matches('.paginationBtns')) {
        event.target.id === 'pgn-next' ? currentPage ++ : currentPage--;
        
        console.log(currentPage);
      await napraviTabela(currentPage);
    }
  });
};
runTable();
