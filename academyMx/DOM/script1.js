const DEV_TABLE = async () => {
  const addEl = el => document.createElement(el);
  const H1 = addEl('h1');
  H1.innerText = 'Developers Table';
  H1.style.textAlign = 'center';
  H1.style.textTransform = 'uppercase';
  document.body.append(H1);
  
  const ROOT = addEl('div');
  ROOT.innerText = 'hereis root';
  document.body.append(ROOT);

  const tabela = addEl('table');
  ROOT.append(tabela);
  tabela.width = '100%';
  tabela.style.border = '4px solid black';
  tabela.style.borderCollapse = 'collapse';

  const thead = addEl('thead');
  const thRow = addEl('tr');

  try {
    const DEV_USERS = await getUsers();
    console.log(DEV_USERS);
    const COLUMNS = Object.keys(DEV_USERS[0]);
    console.log(COLUMNS);

    COLUMNS.forEach(column => {
      const th = addEl('th');
      th.innerText = column;
      thRow.append(th);
      th.style.border = '1px solid black';
    });
    thead.append(thRow);
    tabela.append(thead);

    const tbody = addEl('tbody');
    tabela.append(tbody);

    DEV_USERS.forEach(user => {
      const tdRow = addEl('tr');
      COLUMNS.forEach(col => {
        const td = addEl('td');
        td.innerText = user[col];
        tdRow.append(td);
      });
      tbody.append(tdRow);
    });
  } catch (error) {
    console.log(error);
  }
};
DEV_TABLE();
