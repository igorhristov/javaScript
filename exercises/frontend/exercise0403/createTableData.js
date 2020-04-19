const createElement = (type, attrs = {}) => {
    const el = document.createElement(type);
    
    Object.keys(attrs).forEach(attr => {
        el[attr] = attrs[attr];
    });

    return el;
}

const createTableData = async () => {
    const d = document;
    const users = await getUsers();
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
        ...Object.keys(columns)
            .map(key => createElement('th', {
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
            ...Object.keys(columns).map(key => createElement('td', {
                textContent: user[key],
                ...key === 'id' && { scope: 'row' }
            }))
        );

        const actionTd = createElement('td', { className: 'text-right' });


        const btn = createElement('button', {
            className: 'btn btn-outline-primary',
            textContent: 'Info',
            id: `userId-${user.id}`
        })

        btn.setAttribute('data-id', user.id)
        
        actionTd.append(
            // createElement('button', {
            //     className: 'btn btn-outline-primary',
            //     textContent: 'Info',
            //     id: `userId-${user.id}`
            // })
            btn
        );

        tr.append(actionTd)

        return tr;
    });

    tBody.append(...rows);

    document.getElementById('root').append(table);
}