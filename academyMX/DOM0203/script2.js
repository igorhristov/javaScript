const RUN = async () => {
  try {
    const addEl = el => document.createElement(el);
    const h1 = addEl('h1');
    document.body.prepend(h1);
    h1.setAttribute('id', 'pageTitle');

    h1.innerText = 'Hello Wolrd!';
    const pageTitle = document.getElementById('pageTitle');
    pageTitle.style.color = 'red';
    pageTitle.style.textAlign = 'center';

    const root2 = document.getElementById('root2');
    const TABLE = addEl('table');
    root2.append(TABLE);
    TABLE.setAttribute('id', 'userTable');
    const userTable = document.getElementById('userTable');
    userTable.width = '100%';
    userTable.style.border = '4px solid darkblue';

    const thead = addEl('thead');
    const tbody = addEl('tbody');
    thead.setAttribute('id', 'theadId');
    
    TABLE.append(thead);
    TABLE.append(tbody);

    const devUsers = await getUsers();
    console.log(devUsers);
    const columns = [...Object.keys(devUsers[0])];
    console.log(columns);
    const thTr = addEl('tr');

    columns.forEach(col => {
      const th = addEl('th');
      th.innerText = col;
      th.setAttribute('class', 'colls');
      thTr.append(th);
    });
    thead.append(thTr);
    // const thClass = document.querySelectorAll('colls');
    // console.log(thClass);
    // thClass.style.color = 'red';
    // [...thClass.style.color = 'red']

    devUsers.forEach(user => {
      const tdRow = addEl('tr');

      columns.forEach(col => {
        const td = addEl('td');
        td.innerText = user[col];
        td.setAttribute('class', 'tdClass');
        tdRow.append(td);
    });
    tbody.append(tdRow);
});
// document.getElementsByClassName('tdClass').style.color = 'red';
// const tdClass = document.getElementsByClassName('#userTable.tdClass');
    // tdClass.style.color = 'red';
    // [...tdClass].style.color = 'red'
    // tdClass.style.color = 'red';
    // console.log(tdClass);
  } catch (error) {
    console.log(error);
  }
};

RUN();
