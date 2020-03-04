const TABLE_INFO = async () => {
  await createTable();

  const btns = document.querySelectorAll('button');

  const onBtnClick = async event => {
    const btn = event.target;
    const td = btn.parentNode;
    const tr = td.parentNode;

    const btnIdfromTree = tr.querySelector('td').innerText;

    const devUser = await getUser(btnIdfromTree * 1);
    console.log(devUser);
  };

  const arrBtns = [...btns];

  arrBtns.forEach(btn => {
    btn.addEventListener('click', onBtnClick);
  });
};

TABLE_INFO();
