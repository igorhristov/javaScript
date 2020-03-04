const RUN = async () => {
  await createTable();
  const btns = document.querySelectorAll('button');
  arrbtns = [...btns];

  const getIdFromTreeOfButtons = async (event) => {
    const btn = event.target;
    const td = btn.parentNode;
    const idFromBtn = td.parentNode.querySelector('td').innerText;

    console.log(idFromBtn);

    const user =await getUser(idFromBtn * 1);
    console.log(user);
    
  };

  arrbtns.forEach(btn => {
    btn.addEventListener('click', getIdFromTreeOfButtons);
  });
};
RUN();
