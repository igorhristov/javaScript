const mustacheTemplate = async () => {
    const users = await getUsers();
    // console.log(users[0]);
  
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
  
                      <div class="message d-none text-center bg-success text-light rounded" id="more-info-{{id}}">
                          <span class="mr-3">born {{birthYear}} </span
                          <span class="text-primary">salary: {{salary}}$</span>
                          <i class="text-warning ml-3">{{gender}}</i>
                      </div>
  
                  </div>
              </div>
          {{/users}}

          <div class="container">
            <nav aria-label="Users pagination">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li class="page-item active">
                        <a class="page-link" href="#">1 <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item"><a class="page-link" href="#">6</a></li>
                    <li class="page-item"><a class="page-link" href="#">7</a></li>
                    <li class="page-item"><a class="page-link" href="#">8</a></li>
                    <li class="page-item"><a class="page-link" href="#">9</a></li>
                    <li class="page-item"><a class="page-link" href="#">10</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
          </div>
          `;

    const usersMarkUp = Mustache.render(TEMPLATE, { users: users.slice(0, 2) });
    document.querySelector('#root').innerHTML = usersMarkUp;
  
  
  
    document.querySelector('#root').addEventListener('click', async event => {
      event.preventDefault();
      if (event.target.matches('.card-link')) {
        const id = event.target.getAttribute('data-id');
        const moreInfoCnt = document.getElementById('more-info-' + id);
        moreInfoCnt.classList.toggle('d-none');
      }
    });
  };
  
  mustacheTemplate();
  
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
        await createTable(sortOrder, sortBy, currrentPage);
      }
   */
  