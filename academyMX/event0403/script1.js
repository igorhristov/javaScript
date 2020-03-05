const RUN_TABLE = async () => {
  await createTable();

  const BTNS = document.getElementsByClassName('btn');
  const arrFromBTNSnode = [...BTNS];

  const onButtonClickShowUserInConsoleLog = async event => {
    const btn = event.target.parentNode.parentNode.querySelector('td').innerText * 1;

    const userInfoInLog = await getUser(btn);

    console.log(userInfoInLog);
  };

  arrFromBTNSnode.forEach(btn => {
    btn.addEventListener('click', onButtonClickShowUserInConsoleLog);
  });
};
RUN_TABLE();
