const createElement = (type, attrs = {}) => {
  const el = document.createElement(type);

  Object.keys(attrs).forEach(attr => {
    el[attr] = attrs[attr];
  });

  return el;
};

const createTable = async (sortOrder = 'asc', sortBy = 'id') => {
  const d = document;
  const users = await getUsers()
    .then(users => {
      return users.sort((u1, u2) => {
        let a = u1[sortBy];
        let b = u2[sortBy];

        [a, b] = sortOrder === 'asc' ? [a, b] : [b, a];

        return a > b ? 1 : -1;
      });
    })
    .then(users => users.slice(0, 10));

  const columns = {
    id: '#',
    birthYear: 'Birth year',
    firstName: 'First Name',
    lastName: 'Last Name'
  };

  const table = createElement('table', {
    className: 'table table-hover'
  });

  const tCaption = createElement('caption', {
    textContent: 'List of developers'
  });
  table.append(tCaption);

  const tHeader = createElement('thead');
  table.append(tHeader);
  
  


  const headerRow = d.createElement('tr');
  tHeader.append(headerRow);

  headerRow.append(
    ...Object.keys(columns).map(key =>
      createElement('th', {
        textContent: columns[key] + (sortBy === key ? (sortOrder === 'desc' ? ' ↓' : ' ↑') : ''),
        className: 'sortable',
        id: `column-head-${key}`
      })
    )
  );

  headerRow.append(
    createElement('th', {
      textContent: 'Action',
      className: 'text-right',
      scope: 'col'
    })
  );

//// tfooter
const tFooter = createElement('tfoot');
table.append(tFooter);
const footerRow = d.createElement('tr');
tFooter.append(footerRow);
const footColumns = {
  prev: 'prev',
  next: 'next',
};
// const footColumns = ['prev', 'next']
footerRow.append(
  ...Object.keys(footColumns).map(key =>
    createElement('td', {
      textContent: footColumns[key],
      className: 'btn btn-danger footBtn m-3',
      id: `footer-page-btn-${key}`
    })
  )
);
///// tfooter end

  const tBody = createElement('tbody');
  table.append(tBody);

  const rows = users.map(user => {
    const tr = createElement('tr');

    tr.append(
      ...Object.keys(columns).map(key =>
        createElement('td', {
          textContent: user[key],
          ...(key === 'id' && { scope: 'row' })
        })
      )
    );

    const actionTd = createElement('td', { className: 'text-right' });

    const btn = createElement('button', {
      className: 'btn btn-outline-primary',
      textContent: 'Info',
      id: `user-${user.id}`
    });
    btn.setAttribute('data-id', user.id);

    actionTd.append(btn);

    tr.append(actionTd);

    return tr;
  });

  tBody.append(...rows);

  const oldTable = d.querySelector('#root table');

  if (oldTable) {
    oldTable.remove();
  }

  document.getElementById('root').append(table);
};
