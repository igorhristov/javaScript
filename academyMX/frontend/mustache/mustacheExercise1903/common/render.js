const mustacheTemplate = async () => {
  const users = await getUsers();

  const TEMPLATE = `
            {{#users}}
                <div class="card my-3">
                    <div class="card-body">
    
                        <img src="{{avatar}}" class="float-left rounded-circle pr-2" width="64" height="64">
    
                        <div class="message">
                            <h5 class="card-title">{{firstName}} {{lastName}}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{{skill}}</h6>
                            <p class="card-text">{{bio}}</p>
    
                        </div>
    
                        <div class="actions">
                            <a href="#" data-id="{{id}}" class="card-link">More Info</a>
                        </div>
    
                        <div class="message d-none text-center bg-success text-light p-2 rounded" id="more-info-{{id}}">
                            <span class="mr-3">Born: {{birthYear}} </span
                            <span class="text-primary">Salary: {{salary}}$</span>
                            <i class="text-warning ml-3">Gender: {{gender}}</i>
                        </div>
    
                    </div>
                </div>
            {{/users}}
  
            <div class="container">
              <nav aria-label="Users pagination">
                  <ul class="pagination">
                      <li id="prevParent" class="page-item disabled">
                          <a data-page='prev' class="page-link" id='prevBtn' href="#" tabindex="-1" aria-disabled="true">Previous</a>
                      </li>
                      <li class="page-item active">
                          <a data-page='1' class="page-link" href="#">1 <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="page-item"><a data-page='2' class="page-link" href="#">2</a></li>
                      <li class="page-item"><a data-page='3' class="page-link" href="#">3</a></li>
                      <li class="page-item"><a data-page='4' class="page-link" href="#">4</a></li>
                      <li class="page-item"><a data-page='5' class="page-link" href="#">5</a></li>
                      <li class="page-item"><a data-page='6' class="page-link" href="#">6</a></li>
                      <li class="page-item"><a data-page='7' class="page-link" href="#">7</a></li>
                      <li class="page-item"><a data-page='8' class="page-link" href="#">8</a></li>
                      <li class="page-item"><a data-page='9' class="page-link" href="#">9</a></li>
                      <li class="page-item"><a data-page='10' class="page-link" href="#">10</a></li>
                      <li id="nextParent" class="page-item">
                          <a  data-page='next' id='nextBtn' class="page-link" href="#">Next</a>
                      </li>
                  </ul>
              </nav>
            </div>
            `;

  let currrentPage = 1;
  let usersPerPage = 10;

  const usersMarkUp = Mustache.render(TEMPLATE, {
    users: users.slice((currrentPage - 1) * usersPerPage, currrentPage * usersPerPage)
  });

  document.querySelector('#root').innerHTML = usersMarkUp;

  document.querySelector('#root').addEventListener('click', async event => {
    event.preventDefault();

    if (event.target.matches('.card-link')) {
      const id = event.target.getAttribute('data-id');
      document.getElementById('more-info-' + id).classList.toggle('d-none');
    }

    if (event.target.matches('.page-link')) {
      event.preventDefault();

      const pageId = event.target.getAttribute('data-page');

      if (pageId === 'next') {
        currrentPage++;
      } else if (pageId === 'prev') {
        currrentPage--;
      } else {
        currrentPage = pageId;
      }

      //   currrentPage = pageId === 'next' ? currrentPage + 1 : pageId === 'prev' ? currrentPage - 1 : pageId;

      currrentPage >= 2
        ? document.querySelector('#prevParent').classList.remove('disabled')
        : document.querySelector('#prevParent').classList.add('disabled');

      currrentPage <= 9
        ? document.querySelector('#nextParent').classList.remove('disabled')
        : document.querySelector('#nextParent').classList.add('disabled');

      document.querySelector('#root').innerHTML = Mustache.render(TEMPLATE, {
        users: users.slice((currrentPage - 1) * usersPerPage, currrentPage * usersPerPage)
      });
    }
  });
};
mustacheTemplate();

/****
 * 
 * 
 * 
 * 
  // currentPage * usersPerPage, currentPage * usersPerPage + usersPerPage
 * 
  //   const maxPages = Math.ceil(users.length / usersPerPage);
 * 
   * const usersPerPage = 10;

  const maxPages = Math.ceil(totalUsers.length / usersPerPage);
  console.log(maxPages);

  const users = totalUsers.slice(
    currentPage * usersPerPage,
    currentPage * usersPerPage + usersPerPage
  );
   */
/**
     * if (event.target.matches('.footBtn')) {
          //   console.log(event.target);
          if (event.target.id === 'footer-page-btn-next') {
            currrentPage++;
          } else if (event.target.id === 'footer-page-btn-previous') {
            currrentPage--;
          }
          //   event.target === 'next' ? (currrentPage += 1) : (currrentPage -= 1);
          console.log(currrentPage);
        }
     */
/*****if (event.target.id === 'nextBtn') {
        currrentPage > 9
          ? document.querySelector('.nextBtn').parentNode.classList.add('disabled')
          : document.querySelector('.nextBtn').parentNode.classList.remove('disabled');
        currrentPage++;
      } else if (event.target.id === 'prevBtn') {
        currrentPage < 2
          ? document.querySelector('.prevBtn').parentNode.classList.add('disabled')
          : document.querySelector('.prevBtn').parentNode.classList.remove('disabled');
          currrentPage --;
      } */
