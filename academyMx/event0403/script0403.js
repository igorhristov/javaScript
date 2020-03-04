const USERS = async () => {
    const users = await getUsers();
    console.log(users);
    
}

const TABLE_INFO = async () => {
    const onBtnClick = async (event) => {
        console.log('hello');
        
         
    };
    
    const eventListenersToBtns = async () => {
        const btns = document.getElementsByClassName('btn');
        [...btns].forEach(btn => btn.addEventListener('click', onBtnClick()))
    }

    await createTable();
    eventListenersToBtns();
}

TABLE_INFO();