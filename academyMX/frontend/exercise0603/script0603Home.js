const runTable = async () => {
  /////////// table events ///////////////////////
  let sortBy = 'id';
  let sortOrder = 'asc';
  await createTable(sortOrder, sortBy);

  const onThClick = async event => {
    const thClickEvent = event.target.innerText;
    // console.log(thClickEvent);

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
    // createTable(sortBy, sortOrder).replaceWith(await createTable('desc', sortBy));
    // document.getElementById('root').append(createTable(sortOrder, sortBy));
    // await createTable(sortOrder, sortBy);
    // document.getElementById('root').replaceChild('table', createTable());
    var parent = document.getElementById('root');
    var child = document.getElementsByTagName('table');
    parent.appendChild(child);
  };
  // return sortBy;

  const onMouseEnterPointer = event => {
    event.target.style.cursor = 'pointer';
  };

  const thNodes = document.querySelectorAll('thead th');
  const arrTh = [...thNodes];

  arrTh.forEach(th => {
    th.addEventListener('click', onThClick);
    th.addEventListener('mouseenter', onMouseEnterPointer);
  });

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
    const btnId = event.target.getAttribute('id').replace('userid-', '');
    const user = await getUser(+btnId);
    console.log(user);
  };

  arrBtns.forEach(btn => {
    btn.addEventListener('click', onButtonClick);
  });
};
runTable();
