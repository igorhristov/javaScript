const userTableFn = async () => {
  try {
    const devUsers = await getUsers();
    // Page Title 
    const h1 = document.createElement('h1');
    h1.innerText = 'USER TABLE';
    h1.style.textAlign = 'center';
    h1.textContent = 'User Table';
    h1.style.textAlign = 'center';
    h1.style.textTransform = 'uppercase';
    document.body.prepend(h1);

    // TABLE
    const rootDiv = document.querySelector('#root');
    const userTable = document.createElement('table');
    userTable.style.border = '3px solid black';
    userTable.width = '100%';
    rootDiv.append(userTable);

    // TABLE COLUMS
    const columns = Object.keys(devUsers[0]);
    console.log(columns);

    // TABLE HEAD
    const tHead = document.createElement('thead');
    tHead.style.textAlign = 'left';
    userTable.append(tHead);
    const thRow = document.createElement('tr');
    columns.forEach(column => {
      const th = document.createElement('th');
      th.innerText = `${column}`;
      thRow.append(th);
    });
    tHead.append(thRow);
    tHead.style.color = 'red';

    // TABLE BODY
    const tBody = document.createElement('tbody');
    userTable.append(tBody);

    devUsers.forEach(user => {
      const tdRow = document.createElement('tr');

      columns.forEach(col => {
        const td = document.createElement('td');
        td.innerText = user[col];
        tdRow.append(td);
      });

      tBody.append(tdRow);
    });

    console.log(devUsers);
  } catch (error) {}
};

userTableFn();
