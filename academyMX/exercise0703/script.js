const render = async () => {

    const d = document;
    
    let sortOrder = 'asc';
    let sortBy = 'id';
    let currrentPage;
    let pageBtn;
    await createTable(sortOrder, sortBy);

    d.getElementById('root')
        .addEventListener('click', async (event) => {
            if (event.target.matches('th.sortable')) {
                sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
                sortBy = event.target.id.replace('column-head-', '');
                await createTable(sortOrder, sortBy);
            }

            if(event.target.matches('td.footBtn')) {
                // console.log(event.target);
                pageBtn = event.target.id.replace('footer-page-btn-', '');
                console.log(pageBtn);
                currrentPage === 'next' ;
                console.log(currrentPage);
                // await createTable(sortOrder, sortBy);
            }
        })

    

    // const [ idHead, birthYearHead ] = [
    //     ...document.querySelectorAll('#root table th')
    // ];

    // const onIdHeadClick = async () => {
    //     sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    //     sortBy = 'id';

    //     await createTable(sortOrder, sortBy);

    //     const [ idHead, birthYearHead ] = [
    //         ...document.querySelectorAll('#root table th')
    //     ];

    //     idHead.addEventListener('click', onIdHeadClick);
    // }

    // idHead.addEventListener('click', onIdHeadClick);
}

render();