const novElement = (type, attributes = {}) => {
  const ELEMENT = document.createElement(type);

  Object.keys(attributes).forEach(attr => {
    ELEMENT[attr] = attributes[attr];
  });
  return ELEMENT;
};

const napraviTabela = async currenPage => {
  const totalUsers = await getUsers();

  /////////////// paginations /////////////////////
  const USERS_PER_PAGE = 10;
  const TOTAL_PAGES = Math.ceil(totalUsers.length / USERS_PER_PAGE);
  console.log(TOTAL_PAGES);

  const users = await totalUsers.slice(
    currenPage * USERS_PER_PAGE,
    currenPage * USERS_PER_PAGE + USERS_PER_PAGE
  );
  /////////////// paginations END/////////////////////

  const TABELA = novElement('table', {
    className: 'table table-hover table-striped'
  });

  /////////////// thead END////////////////////
  const COLUMNS = {
    id: 'бр.',
    birthYear: 'Година на Раѓање',
    firstName: 'Име',
    lastName: 'Презиме',
    salary: 'Плата'
  };

  const tHeader = novElement('thead', {
    className: 'thead-dark text-center'
  });
  TABELA.append(tHeader);

  const headerRow = novElement('tr', {
    className: 'sortable'
  });
  tHeader.append(headerRow);
  headerRow.style.cursor = 'pointer';
  // document.getElementsByClassName('sortable').style.cursor = 'pointer';

  headerRow.append(
    ...Object.keys(COLUMNS).map(key =>
      novElement('th', {
        innerText: COLUMNS[key],
        className: 'sortable',
        id: `headCol-${key}`
      })
    )
  );
  //   headerRow.append(
  //     novElement('th', {
  //       innerText: 'ИНФО',
  //       className: 'text-right',
  //       scope: 'col'
  //     })
  //   );
  /////////////// thead END/////////////////////

  /////////////// tbody ////////////////////////
  const tBody = novElement('tbody');
  TABELA.append(tBody);

  const redovi = users.map(user => {
    const tr = novElement('tr');
    tr.append(
      ...Object.keys(COLUMNS).map(key =>
        novElement('td', {
          innerText: user[key]
        })
      )
    );
    return tr;
  });
  tBody.append(...redovi);
  /////////////// tbody END/////////////////////

  /////////////// tfoot ////////////////////////
  const tFoot = novElement('tfoot');
  TABELA.append(tFoot);
  const footRow = novElement('tr');
  tFoot.append(footRow);
  const footTd = novElement('td', {
    className: 'text-right',
    colSpan: 5
  });
  footTd.append(
    novElement('button', {
      innerText: '<<< Previus',
      className: 'paginationBtns btn btn-success mr-3',
      id: 'pgn-previous',
      disabled: currenPage < 1
    }),
    novElement('button', {
      innerText: 'NEXT >>>',
      className: 'paginationBtns btn btn-success',
      id: 'pgn-next',
      disabled: currenPage > TOTAL_PAGES - 2
    })
  );
  footRow.append(footTd);
  /////////////// tfoot END ////////////////////

  /////////////// tabela RUN ///////////////////
  const staraTabela = document.querySelector('#root table');
  if (staraTabela) {
    staraTabela.remove();
  }
  document.getElementById('root').append(TABELA);
};
