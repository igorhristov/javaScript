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
                    <p class="card-text">{{ bio }}</p>
                </div>
                <div class="actions">
                    <a href="#" class="card-link" data-id="{{id}}">More Info</a>
                        <div class="message d-none" id="more-info-{{id}}">
                        <h6 class="card-title">{{gender}}</h6>
                        <h6 class="card-title">{{salary}}</h6>
                        <h6 class="card-title">{{birthYear}}</h6>
                    </div>
                </div>
            </div>
        </div>
    {{/users}}

    <div class="container">
        <nav aria-label="Users pagination">
            <ul class="pagination">

                {{#previousBtn}}
                    <li id="previous" class="page-item {{ disablePrevious }}">
                        <a class="page-link page-previous-next" href="#" previous-next="previous">Previous</a>
                    </li>

                {{#pages}}
                    <li class="page-item {{ activeClass }}">
                        <a class="page-link page-numbers" data-page={{ dataPage }} href="#">{{ label }}</a>
                    </li>
                {{/pages}}

                    <li class="page-item {{ disableNext }}">
                        <a class="page-link page-previous-next" href="#" previous-next="next">Next</a>
                    </li>
                {{/previousBtn}}

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
    const disablePreviousNext = (currentPage) => {
        let previousBtn = [{
            disablePrevious: currentPage === 0 ? 'disabled' : '',
            disableNext: currentPage === (TOTAL_PAGES - 1) ? 'disabled' : ''
        }]
        return previousBtn;
    }
    document.getElementById('root').innerHTML = Mustache.render(usersTpl, {
        users: users.slice(currentPage * ITEMS_PER_PAGE, ITEMS_PER_PAGE * (currentPage + 1)),
        pages: getPages(currentPage),
        previousBtn: disablePreviousNext(currentPage)
    });

    document.getElementById('root').addEventListener('click', (event) => {

            event.preventDefault();

            if (event.target.matches("a.card-link")) {
                let infoBtnId = event.target.getAttribute('data-id');
                document.getElementById(`more-info-${infoBtnId}`).classList.toggle('d-block');
            }  
            
            if (event.target.matches("a.page-numbers")) {
                currentPage = event.target.getAttribute('data-page') * 1;

                document.getElementById('root').innerHTML = Mustache.render(usersTpl, {
                    users: users.slice(currentPage * ITEMS_PER_PAGE, ITEMS_PER_PAGE * (currentPage + 1)),
                    pages: getPages(currentPage),
                    previousBtn: disablePreviousNext(currentPage)
                });
            } 
            
            
            if (event.target.matches('a.page-previous-next')) {
                event.target.getAttribute('previous-next') === 'previous' ? currentPage-- : currentPage++;
                
                    document.getElementById('root').innerHTML = Mustache.render(usersTpl, {
                        users: users.slice(currentPage * ITEMS_PER_PAGE, ITEMS_PER_PAGE * (currentPage + 1)),
                        pages: getPages(currentPage),
                        previousBtn: disablePreviousNext(currentPage)
                    })
                
                }
            
        })

}
usersTemplate();