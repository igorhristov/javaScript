const render = async () => {
  const d = document;

  let sortOrder = 'asc';
  let sortBy = 'id';
  let currrentPage = 0;
  await createTable(sortOrder, sortBy, currrentPage);

  d.getElementById('root').addEventListener('click', async event => {
    if (event.target.matches('th.sortable')) {
      sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
      sortBy = event.target.id.replace('column-head-', '');
      await createTable(sortOrder, sortBy, currrentPage);
    }

    if (event.target.matches('.footBtn')) {
      //   console.log(event.target);
      if (event.target.id === 'footer-page-btn-next') {
        currrentPage++;
      } else if (event.target.id === 'footer-page-btn-previous') {
        currrentPage--;
      }
      //   event.target === 'next' ? (currrentPage += 1) : (currrentPage -= 1);
      console.log(currrentPage);
      await createTable(sortOrder, sortBy, currrentPage);
    }

    
    if (event.target.matches('.btn-outline-primary')) {
      console.log(event.target);
      if(event.target.className ===  'btn-outline-primary') {
        const para = document.getElementsByTagName('p'); 
        para.innerText = ' hello';

      }

      await createTable(sortOrder, sortBy, currrentPage);
    }
  });

  //   const thStyle = document.className('sortable');
  //   thStyle.style.cursor = 'pointer'

  // const [ idHead, birthYearHead ] = [
  //     ...document.querySelectorAll('#root table th')
  // ];

  // const onIdHeadClick = async () => {
  //     sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
  //     sortBy = 'id';

  //     await createTable(sortOrder, sortBy);

  //     const [ idHead, birthYearHead ] = [
  //         ...document.querySelectorAll('#root table th')
  //     ];

  //     idHead.addEventListener('click', onIdHeadClick);
  // }

  // idHead.addEventListener('click', onIdHeadClick);
};

render();
