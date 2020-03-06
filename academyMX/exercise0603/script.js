const runTable = async () => {
  /////////// table events ///////////////////////
  let sortBy = 'id';
  let sortOrder = 'asc';
  await createTable('asc', 'id');

  const onThClick = async event => {
    try {
      const thClickEvent = event.target.innerText;
      console.log(thClickEvent);

      if (thClickEvent === '#') {
        sortBy = 'id';
      } else if (thClickEvent === 'Birth year') {
        sortBy = 'birthYear';
      } else if (thClickEvent === 'First Name') {
        sortBy = 'firstName';
      } else if (thClickEvent === 'Last Name') {
        sortBy = 'lastName';
      }
      console.log(sortBy);

      // return sortBy
    } catch (err) {
      console.log(err);
    }
  };

  await createTable('desc', sortBy);
  // sortBy1.resolve('birthYear')

  const onMouseOver = event => {
    event.target.style.cursor = 'pointer';
  };
  const thNodes = document.querySelectorAll('thead th');
  const arrTh = [...thNodes];

  arrTh.forEach(th => {
    th.addEventListener('click', onThClick);
    th.addEventListener('mouseenter', onMouseOver);
  });

  // await createTable(sortOrder, sortBy);

  /////////////// tboty rows events ///////////////////
  const trNodes = document.querySelectorAll('tbody tr');
  const arrTbodyRows = [...trNodes];

  const onMouseEnter = event => {
    event.target.style.backgroundColor = 'red';
  };
  const onMouseLeave = event => {
    event.target.style.backgroundColor = 'white';
  };
  arrTbodyRows.forEach(btn => {
    btn.addEventListener('mouseenter', onMouseEnter);
    btn.addEventListener('mouseleave', onMouseLeave);
  });
  //////////////////// buttons events ////////////////

  const tbodyButtonsNodes = document.querySelectorAll('button');
  const arrBtns = [...tbodyButtonsNodes];

  const onButtonClick = async event => {
    const btnId = event.target.getAttribute('id').replace('userId-', '') * 1;

    console.log(await getUser(btnId));
  };

  arrBtns.forEach(btn => {
    btn.addEventListener('click', onButtonClick);
  });
};
runTable();
