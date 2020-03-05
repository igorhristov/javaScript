const createElement = (type, attrs = {}) => {
  const el = document.createElement(type);

  Object.keys(attrs).forEach(attr => {
    el[attr] = attrs[attr];
  });

  return el;
};

const createTable = async (sortOrder = 'asc', sortBy = 'id') => {
  const d = document;
  const users = await getUsers().then(users => {
    return users.sort((a, b) => {
      const by1 = a[sortBy];
      const by2 = b[sortBy];
      return sortOrder === 'desc' ? (by2 > by1 ? 1 : -1) : by1 > by2 ? 1 : -1;
    });
  });
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
        textContent: columns[key]
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

    actionTd.append(
      createElement('button', {
        className: 'btn btn-outline-primary',
        textContent: 'Info',
        id: `userId-${user.id}`
      })
    );

    tr.append(actionTd);

    return tr;
  });

  tBody.append(...rows);

  document.getElementById('root').append(table);
};
