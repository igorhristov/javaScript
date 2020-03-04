const newEl = el => document.createElement(el);

const TABLE_FOR_USERS = async () => {
  try {
    const USERS = await getUsers();
    console.log(USERS);

    const user = USERS.reduce((acc, users) => {
      return !acc || acc.salary < users.salary ? users : acc;
    });
    console.log(user);

    const FRIENDS = [...user.friends];
    // USERS[0].friends.forEach(async id => {
    //   const friend = await getUser(id);
    //   FRIENDS.push(friend);
    // });
    console.log(FRIENDS);

    const H1 = newEl('h1');
    H1.innerText = 'Script 2';
    H1.style.textAlign = 'center';
    document.body.prepend(H1);

    const TABELA = newEl('table');
    TABELA.style.width = '100%';
    TABELA.style.border = '3px solid black';
    const H2 = newEl('h2');
    H2.innerText = 'Tabela na korisnici';
    H2.style.color = 'blue';
    H2.style.textAlign = 'center';
    // TABELA.append(H2);

    //////////////////////////////// head
    const tHead = newEl('thead');

    const COLUMN = ['id', 'firstName', 'lastName', 'birthYear', 'salary'];

    const thRow = newEl('tr');

    COLUMN.map(elem => {
      const th = newEl('th');
      th.innerText = elem;
      th.setAttribute('class', 'th');
      th.style.textAlign = 'left';
      thRow.append(th);
    });
    tHead.append(thRow);
    TABELA.append(tHead);
    // document.getElementsByClassName('th').style.color = 'red'

    ///////////////////////// body //////////////////////
    const tBody = newEl('tbody');
    TABELA.append(tBody);

    const prijateli = [...FRIENDS]
    console.log(prijateli);
    
    
    USERS.map(user => {
      const tr = newEl('tr');
      COLUMN.map(col => {
        const td = newEl('td');
        td.innerText = user[col];
        tr.append(td);
      });
      tBody.append(tr);
    });




    // USERS.map(user => {
    //   const tr = newEl('tr');
    //   COLUMN.map(col => {
    //     const td = newEl('td');
    //     td.innerText = user[col];
    //     tr.append(td);
    //   });
    //   tBody.append(tr);
    // });

    const run = document.querySelector('#root').append(TABELA);
    console.log(TABELA);
    return run;
  } catch (err) {
    console.log(err);
  }
};
TABLE_FOR_USERS();
