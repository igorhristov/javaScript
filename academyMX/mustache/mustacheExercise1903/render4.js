const TEMPLATE = `
    {{ #users }}
        <div class="card my-3">
            <div class="card-body">

                <img src="{{ avatar }}" class="float-left rounded-circle pr-2" width="64" height="64">
                
                <div class="message">
                    <h5 class="card-title">{{ firstName }} {{ lastName }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{ skill }}</h6>
                    <p class="card-text">{{ bio }}</p>
                </div>

                <div class="actions">
                    <a href="#" class="card-link" data-info={{ id }}>More Info</a>
                </div>

                <div id="more-info-{{ id }}" class="message d-none text-center">
                    <p>BirthYear: {{ birthYear }} Salary:{{ salary }} Gender: {{ gender }}</p>                    
                </div>

            </div>
        </div>
    {{ /users }}

    <div  class="container">
        <nav aria-label="Users pagination">
            <ul class="pagination">

                
                {{#pagination}}
                    <li class="page-item {{ disabledPrev }}">
                        <a class="page-link prev-next" href="#" data-prevNext='prev'>Previous</a>
                    </li>
                

                    {{ #pages }}
                        <li class="page-item {{ activeClass }}">
                            <a class="page-link page-numbers" href="#" data-page= {{ dataPage }}>{{ label }}<span class="sr-only">(current)</span></a>
                        </li>
                    {{ /pages }}
                

                    <li class="page-item {{ disabledNext }}">
                        <a class="page-link prev-next" href="#" data-prevNext='next'>Next</a>
                    </li>
                {{/pagination}}


            </ul>
        </nav>
    </div>
`;

const runUsersTemplateMustache = async _ => {
    const ROOT = document.querySelector('#root');
    const users = await getUsers();

    let currentPage = 0;
    const itemsPerPage = 10;
    const totalPages = Math.ceil(users.length / itemsPerPage);

    const getPages = currentPage => {
        let pages = [];

        for (let i = 0; i < totalPages; i++) {
            pages.push({
                dataPage: i,
                label: i + 1,
                activeClass: currentPage === i ? 'active' : ''
            });
        }

        return pages;
    };

    const disablePreviousNext = currentPage => {
        let prevNextBTN = [
            {
                disabledPrev: currentPage === 0 ? 'disabled' : '',
                disabledNext: currentPage === totalPages - 1 ? 'disabled' : ''
            }
        ];

        return prevNextBTN;
    };

    ROOT.innerHTML = Mustache.render(TEMPLATE, {
        users: users.slice(currentPage * itemsPerPage, itemsPerPage * (currentPage + 1)),
        pages: getPages(currentPage),
        pagination: disablePreviousNext(currentPage)
    });

    ROOT.addEventListener('click', async e => {
        e.preventDefault();

        if (e.target.matches('.card-link')) {
            const ID = e.target.getAttribute('data-info');
            document.querySelector('#more-info-' + ID).classList.toggle('d-none');
        }

        if (e.target.matches('.page-numbers')) {
            currentPage = e.target.getAttribute('data-page') * 1;
            ROOT.innerHTML = Mustache.render(TEMPLATE, {
                users: users.slice(currentPage * itemsPerPage, itemsPerPage * (currentPage + 1)),
                pages: getPages(currentPage),
                pagination: disablePreviousNext(currentPage)
            });
        }

        if (e.target.matches('.prev-next')) {
            e.target.getAttribute('data-prevNext') === 'prev' ? currentPage-- : currentPage++;

            ROOT.innerHTML = Mustache.render(TEMPLATE, {
                users: users.slice(currentPage * itemsPerPage, itemsPerPage * (currentPage + 1)),
                pages: getPages(currentPage),
                pagination: disablePreviousNext(currentPage)
            });
        }
    });
};
runUsersTemplateMustache();
