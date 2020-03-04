const napraviElement = (tip, attributes = {}) => {
  const element = document.createElement(tip);

  Object.keys(attributes).forEach(attr => {
    element[attr] = attributes[attr];
  });

  return element;
};

const shortRun = async () => {
  const users = await getUsers();
  console.log(users);
  const COLUMNS = ['id', 'birthYear', 'firstName', 'lastName'];
  const tabela = napraviElement('table');
  tabela.style.width = '100%';

  const tHead = napraviElement('thead');
  tabela.append(tHead);

  const headRow = napraviElement('tr');
  tHead.append(headRow);

  headRow.append(
    ...COLUMNS.map(key =>
      napraviElement('th', {
        textContent: key
      })
    )
  );

  const tBody = napraviElement('tbody');
  tabela.append(tBody);

  const ROWS = users.map(user => {
    const tr = napraviElement('tr');

    tr.append(
      ...COLUMNS.map(key =>
        napraviElement('td', {
          textContent: user[key]
        })
      )
    );

    return tr;
  });
  tBody.append(...ROWS);

  console.log(tabela);
  document.getElementById('root').append(tabela);
};

shortRun();
