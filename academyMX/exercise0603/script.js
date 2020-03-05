const runTable = async () => {
  /////////// table events ///////////////////////
  let sortBy = 'id';
  let sortOrder = 'asc';
  await createTable(sortOrder, sortBy);
  const thNodes = document.querySelectorAll('thead th');
  const arrTh = [...thNodes];

  const onThClick = async event => {
    let th = await event.target.innerText;
    console.log(th);
    if(th === '#') {
      sortBy = 'id'
    } else if(th === 'Birth year') {
      return  sortBy = 'birthYear'
    } else if(th === 'first Name') {
        sortBy = firstName
    }
  return  await createTable(sortOrder, sortBy);
  };

  arrTh.forEach(th => {
    th.addEventListener('click', onThClick);
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

  const tbodyButtonsNodes = document.querySelectorAll('btn');
  const arrBtns = [...tbodyButtonsNodes];

  const onButtonClick = async event => {
    const btnId = document.getAttr('id');
    console.log(btnId);
  };

  arrBtns.forEach(btn => {
    btn.addEventListener('click', 'onButtonClick');
  });
};
runTable();
