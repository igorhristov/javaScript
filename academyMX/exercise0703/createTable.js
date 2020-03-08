const createElement = (type, attrs = {}) => {
  const el = document.createElement(type);

  Object.keys(attrs).forEach(attr => {
    el[attr] = attrs[attr];
  });

  return el;
};

const createTable = async (sortOrder = 'asc', sortBy = 'id', currentPage) => {
  const d = document;
  const sortUsers = await getUsers().then(users => {
    return users.sort((u1, u2) => {
      let a = u1[sortBy];
      let b = u2[sortBy];

      [a, b] = sortOrder === 'asc' ? [a, b] : [b, a];

      return a > b ? 1 : -1;
    });
  });

  const usersPerPage = 10;
  const pageCount = Math.ceil(sortUsers.length / usersPerPage);
  // console.log(pageCount);
  const page = Math.min(pageCount - 1, Math.max(currentPage, 0));
  // console.log(page);

  users = sortUsers.slice(page * usersPerPage, (page + 1) * usersPerPage);

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
  headerRow.style.cursor = 'pointer';
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

  //////////////////// tfooter //////////////////////////////
  const tFooter = createElement('tfoot');
  table.append(tFooter);
  const footerRow = d.createElement('tr');
  tFooter.append(footerRow);

  const td = d.createElement('td');
  td.colSpan = 5;
  td.setAttribute('class', 'text-right');

  td.append(
    createElement('button', {
      textContent: '<<< Previous',
      className: 'footBtn btn btn-danger m-1',
      id: `footer-page-btn-previous`,
      disabled: currentPage < 0
    }),

    createElement('button', {
      textContent: 'Next >>>',
      className: 'footBtn btn btn-danger',
      id: `footer-page-btn-next`,
      disabled: page < currentPage
    })
  );
  footerRow.append(td);

  ///////////////////// tfooter end //////////////////////////////

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

  const par = document.createElement('p');
  par.setAttribute('id', 'myInfo');
  par.setAttribute('class', 'text-center text-success bg-dark align-middle');
  const oldP = d.querySelector('#root p');
  if (oldP) {
    par.remove();
  }

  document.getElementById('root').append(table);
  document.getElementById('root').append(par);
};
