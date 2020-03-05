const runTable = async () => {
  await createTable('asc', 'firstName');
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
};
runTable();
