const novEl = el => document.createElement(el);

const TABLE_USERS = async () => {
  const USERS = await getUsers();
  console.log(USERS);
  const COLUMNS = ['id', 'firstName', 'lastName', 'birthYear'];

  const TABELA = novEl('table');
  TABELA.style.width = '100%';

  const tHead = novEl('thead');
  TABELA.append(tHead);

  const theadRow = novEl('tr');
  theadRow.style.textAlign = 'left';
  
  COLUMNS.map(col => {
    const th = novEl('th');
    th.innerText = col;
    theadRow.append(th);
  });
  tHead.append(theadRow);

  const tBody = novEl('tbody');
  TABELA.append(tBody);

  USERS.map(user => {
    const tr = novEl('tr');

    COLUMNS.map(key => {
      const td = novEl('td');
      td.innerText = user[key];
      tr.append(td);
    });

    tBody.append(tr);
  });

  console.log(TABELA);
  document.getElementById('root').append(TABELA);
};
TABLE_USERS();
