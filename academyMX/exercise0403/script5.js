const RUN_TABLE = async () => {
    await createTable();
    const btns = document.querySelectorAll('table button');
    const arrBtns = [...btns]

    const onButtonClick = async (event) => {
        const buttons = event.target;
        console.log(buttons);
        const btnId = buttons.getAttribute('id').replace('userId-', '')
        console.log(btnId);
        const user = await getUser(btnId * 1)
        console.log(user);
    }
    
    arrBtns.forEach(btn => {
        btn.addEventListener('click', onButtonClick);
    })
}
RUN_TABLE();