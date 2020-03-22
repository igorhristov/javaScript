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
                  {{#pages}}
                      <li class="page-item {{ activeClass }}">
                          <a class="page-link" data-page={{ dataPage }} href="#">{{ label }}</a>
                      </li>
                  {{/pages}}
              </ul>
            </nav>
          </div>

          <div class="container">
            <nav aria-label="Users pagination">
                <ul class="pagination">

                {{#pages}}
                  <li class="page-item {{ activeClass }}">
                    <a class="page-link" href="#" data-page{{ dataPage }}> {{ label }} </a>
                  </li>
                {{/pages}}

                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                                        
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
/*  <div class="container">
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

/*

   async function usersTemplate() {
    const users = await getUsers();
    const usersTpl = `
    {{#users}}
        <div class="card my-3">
            <div class="card-body">
                <img src={{avatar}} class="float-left rounded-circle pr-2" width="64" height="64">
                <div class="message">
                    <h5 class="card-title">{{firstName}} {{lastName}}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{skill}}</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="actions">
                    <a href="#" class="card-link" data-id="{{id}}">More Info</a>
                        <div class="message d-none" id="more-info-{{id}}">
                        <h6 class="card-title">{{gender}}</h6>
                        <h6 class="card-title">{{salary}}</h6>
                        <h6 class="card-title">{{bio}}</h6>
                    </div>
                </div>
            </div>
        </div>
    {{/users}}
    <div class="container">
        <nav aria-label="Users pagination">
            <ul class="pagination">
                {{#pages}}
                    <li class="page-item {{ activeClass }}">
                        <a class="page-link" data-page={{ dataPage }} href="#">{{ label }}</a>
                    </li>
                {{/pages}}
            </ul>
        </nav>
    </div>
    <div class="container">
        <nav aria-label="Users pagination">
            <ul class="pagination">
                <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                </li>
                <li class="page-item active">
                    <a class="page-link" data-page='0' href="#">1 <span class="sr-only">(current)</span></a>
                </li>
                <li class="page-item">
                    <a class="page-link" data-page='1' href="#">2</a>
                </li>
                <li class="page-item">
                    <a class="page-link" data-page='2' href="#">3</a>
                </li>
                <li class="page-item">
                    <a class="page-link" data-page='3' href="#">4</a>
                </li>
                <li class="page-item">
                    <a class="page-link" data-page='4' href="#">5</a>
                </li>
                <li class="page-item">
                    <a class="page-link" data-page='5' href="#">6</a>
                </li>
                <li class="page-item">
                    <a class="page-link" data-page='6' href="#">7</a>
                </li>
                <li class="page-item">
                    <a class="page-link" data-page='7' href="#">8</a>
                </li>
                <li class="page-item">
                    <a class="page-link" data-page='8' href="#">9</a>
                </li>
                <li class="page-item">
                    <a class="page-link" data-page='9' href="#">10</a
                ></li>
                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    </div>
`
    let currentPage = 0;
    const ITEMS_PER_PAGE = 10;
    const TOTAL_PAGES = Math.ceil(users.length / ITEMS_PER_PAGE);
    const getPages = (currentPage) => {
        let pages = [];
        for (let i = 0; i < TOTAL_PAGES; i++) {
            pages.push({
                dataPage: i,
                label: i + 1,
                activeClass: currentPage === i ? 'active' : ''
            })
        }
        return pages;
    }
    const usersMarkup = Mustache.render(usersTpl, {
        users: users.slice(currentPage * ITEMS_PER_PAGE, ITEMS_PER_PAGE * (currentPage + 1)),
        pages: getPages(currentPage)
    });
    document.getElementById('root').innerHTML = usersMarkup;
    document.getElementById('root')
        .addEventListener('click', (event) => {
            event.preventDefault()
            if (event.target.matches("a.card-link")) {
                let infoBtnId = event.target.getAttribute('data-id')
                document.getElementById(`more-info-${infoBtnId}`).classList.toggle('d-block');
            } else if (event.target.matches("a.page-link")) {
                currentPage = event.target.getAttribute('data-page') * 1;
                document.getElementById('root').innerHTML = Mustache.render(usersTpl, {
                    users: users.slice(currentPage * ITEMS_PER_PAGE, ITEMS_PER_PAGE * (currentPage + 1)),
                    pages: getPages(currentPage)
                });;
            }
        })
}
usersTemplate();
   */
