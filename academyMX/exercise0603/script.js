const runTable = async () => {
  /////////// table events ///////////////////////
  let sortBy = 'id';
  let sortOrder = 'asc';
  await createTable(sortOrder, sortBy);

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
