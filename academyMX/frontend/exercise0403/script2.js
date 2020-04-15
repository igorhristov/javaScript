const RunTable = async () => {
  await createTable();

  const NODE_BUTTONS = document.querySelectorAll('button');
  const ARRAY_OF_BUTTONS = [...NODE_BUTTONS];

  const onButtonClick = async event => {
    const BTN = event.target.parentNode.parentNode;
    const idFromTableTree = document.querySelector('td').innerText;

    const infoOfUser = await getUser(idFromTableTree * 1);
    console.log(infoOfUser);
  };
  ARRAY_OF_BUTTONS.forEach(btn => {
    btn.addEventListener('click', onButtonClick);
  });
};
RunTable();
