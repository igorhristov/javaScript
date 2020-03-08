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
      const userInfo = await getUser(event.target.getAttribute('data-id') * 1);
      const rot = document.getElementById('myInfo');
      rot.innerText = `Hi my name is ${userInfo.firstName} ${userInfo.lastName}. I am ${2020 - userInfo.birthYear} years old ${userInfo.gender}. My Salary is ${Math.round(userInfo.salary)}$`
    //   console.log(rot);

      await createTable(sortOrder, sortBy, currrentPage);
    }
  });

 };

render();
