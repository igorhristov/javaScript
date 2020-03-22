const TEMPLATE_OF_USERS = `
    {{#users}}
        <div class="card my-3">
            <div class="card-body">

                <img src="{{ avatar }}" class="float-left rounded-circle pr-2" width="64" height="64">

                <div class="message">
                    <h5 class="card-title">{{ firstName }} {{ lastName }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{ skill }}</h6>
                    <p class="card-text">{{ bio }}</p>
                </div>

                <div class="actions">
                    <a data-id="{{ id }}" href="#" class="card-link">More Info</a>
                </div>

                <div id="more-info-{{ id }}" class="message d-none">
                    <p>born: {{ birthYear }}  Salary: {{ salary }}$  Gender: {{ gender }}</p>
                </div>

            </div>
        </div>
    {{/users}}

    <div class="container">
        <nav aria-label="Users pagination">
            <ul class="pagination">

               

                {{#pages}}              
                    <li class="page-item {{ activeClass }}">
                        <a class="page-link page-numbers" data-page={{ dataPage }} href="#">{{ label }}</a>
                    </li>
                {{/pages}}  

               

            </ul>
        </nav>
    </div>
`;
/**
 * 
 *  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                </li>
 * 
 * 
 *  <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
 * / */
const mustacheRenderUsers = async () => {
    const ROOT = document.querySelector('#root');
    const users = await getUsers();

    const currentPage = 0;
    const ITEMS_PER_PAGE = 10;
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

    ROOT.innerHTML = Mustache.render(TEMPLATE_OF_USERS, {
        users: users.slice(currentPage * ITEMS_PER_PAGE, ITEMS_PER_PAGE * (currentPage + 1)),
        pages: getPages(currentPage)
    });



    ROOT.addEventListener('click', event => {
        event.preventDefault();

        if (event.target.matches('.card-link')) {
            const ID = event.target.getAttribute('data-id');
            document.querySelector('#more-info-' + ID).classList.toggle('d-none');
        }

        if (event.target.matches('.page-link')) {
            currentPage = event.target.getAttribute('data-page') * 1;

            ROOT.innerHTML = Mustache.render(TEMPLATE_OF_USERS, {
                users: users.slice(currentPage * ITEMS_PER_PAGE, ITEMS_PER_PAGE * (currentPage + 1)),
                pages: getPages(currentPage)
            });

        }

        
    });
};
mustacheRenderUsers();
