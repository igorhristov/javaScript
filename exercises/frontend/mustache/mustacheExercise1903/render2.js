const template = `
    {{ #users }}
        <div class="card my-3">
            <div class="card-body">

                <img src="{{ avatar }}" class="float-left rounded-circle pr-2" width="64" height="64">

                <div class="message">
                    <h5 class="card-title">{{ lastName }} {{ firstName }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{ skill }}</h6>
                    <p class="card-text">{{ bio }}</p>
                </div>

                <div class="actions">
                    <a href="#" data-id="{{ id }}" class="card-link">More Info</a>
                </div>

                <div id="more-info-{{ id }}" class="message d-none">
                    <p>born: {{ birthYear }}  Salary: {{ salary }}$  Gender: {{ gender }}</p>
                </div>

            </div>
        </div>
    {{ /users }}

    <div class="container">
        <nav aria-label="Users pagination">
            <ul class="pagination">

                {{#previousBtn}}
                    <li id="previous" class="page-item {{ disablePrevious }}">
                        <a class="page-link page-previous-next" href="#" previous-next="previous">Previous</a>
                    </li>
                {{/previousBtn}}    

            {{#pages}}
                <li class="page-item {{ activeClass }}">
                    <a class="page-link page-numbers" data-page={{ dataPage }} href="#">{{ label }}</a>
                </li>
            {{/pages}}

                {{#previousBtn}}
                    <li class="page-item {{ disableNext }}">
                        <a class="page-link page-previous-next" href="#" previous-next="next">Next</a>
                    </li>
                {{/previousBtn}}


            </ul>
        </nav>
    </div>
`;
const runRenderMustache = async () => {
    const ROOT = document.querySelector('#root');
    const users = await getUsers();

    let currentPage = 0;
    const ITEMS_PER_PAGE = 5;
    const TOTAL_PAGES = Math.ceil(users.length / ITEMS_PER_PAGE);

    const getPages = currentPage => {
        let pages = [];

        for (let i = 0; i < TOTAL_PAGES; i++) {
            pages.push({
                dataPage: i,
                label: i + 1,
                activeClass: currentPage === i ? 'active' : ''
            });
        }

        return pages;
    };

    

    const disablePreviousNext = (currentPage) => {
        let previousBtn = [{
            disablePrevious: currentPage === 0 ? 'disabled' : '',
            disableNext: currentPage === (TOTAL_PAGES - 1) ? 'disabled' : ''
        }]
        return previousBtn;
    }
  

    const usersMarkup = Mustache.render(template, {
        users: users.slice(currentPage * ITEMS_PER_PAGE, ITEMS_PER_PAGE * (currentPage + 1)),
        pages: getPages(currentPage),
        previousBtn: disablePreviousNext(currentPage)
    });



    document.querySelector('#root').innerHTML = usersMarkup;


    document.querySelector('#root').addEventListener('click', async event => {
        event.preventDefault();

        if (event.target.matches('.card-link')) {
            const id = event.target.getAttribute('data-id');
            document.querySelector('#more-info-' + id).classList.toggle('d-none');
        }

        if (event.target.matches('.page-link')) {

            currentPage = event.target.getAttribute('data-page') * 1;
            
            document.getElementById('root').innerHTML = Mustache.render(template, {
                users: users.slice(
                    currentPage * ITEMS_PER_PAGE,
                    ITEMS_PER_PAGE * (currentPage + 1)
                ),
                pages: getPages(currentPage)
            });
        }

        if (event.target.matches('.page')) {

           
                    
        }
    });
};
runRenderMustache();
