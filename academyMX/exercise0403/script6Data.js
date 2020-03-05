const runTableData = async () => {
  await createTableData();

  const btns = document.querySelectorAll('table button');
  const Arrbtns = [...btns];

  const onButtonClick = async event => {
    const btn = event.target;
    const btnData = btn.getAttribute('data-id')
    console.log(btnData);
    
    const user = await getUser(btnData * 1);
    console.log(user);
  };

  Arrbtns.forEach(btn => {
    btn.addEventListener('click', onButtonClick);
  });
};
runTableData();
