const runTable = async () => {
  let sortBy = 'id';
  let sortOrder = 'asc';
  await createTable(sortOrder, sortBy);


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


    const tbodyButtonsNodes = document.querySelectorAll('btn');
    const arrBtns = [...tbodyButtonsNodes];

   const onButtonClick = async (event) => {
       const btnId = document.getAttr('id');
       console.log(btnId);
       
   }

    arrBtns.forEach(btn => {
        btn.addEventListener('click', 'onButtonClick');
    })
};
runTable();
