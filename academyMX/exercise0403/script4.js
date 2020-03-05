const run = async () => {
  await createTable();
  const buttonsFromNode = document.getElementsByClassName('btn');
  const arrButtons = [...buttonsFromNode];
  const onButtonClick = async event => {
    const btnTarget = event.target;
    console.log(btnTarget);
    const btnIdFromTarget = btnTarget.getAttribute('id');
    console.log(btnIdFromTarget);
    const btnId = btnIdFromTarget.replace('userId-', '') * 1;
    console.log(btnId);
    const user = await getUser(btnId);
    console.log(user);
  };

  arrButtons.forEach(btn => {
    btn.addEventListener('click', onButtonClick);
  });
};

run();
