const RUN = async _ => {
    const users = await getUsers();
    const tpl = `
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
                    <a href="#" class="card-link" data-id={{ id }}>More Info</a>
                </div>

                <div id="more-info-{{ id }}" class="message d-none" >
                    <p class="card-text">Gender: {{gender}} BirthYear: {{birthYear}} Salary: {{salary}}</p>
                </div>

            </div>
        </div>
    {{/users}}
    <div class="container">
        <nav aria-label="Users pagination">
            <ul class="pagination">

                {{ #pagination }}
                    <li class="page-item {{ disabledPrev }}">
                        <a class="page-link prev-next" href="#" tabindex="-1" data-prevNext='prev'>Previous</a>
                    </li>

                        {{ #pages }}
                            <li class="page-item {{ activeClass }}">
                                <a class="page-numbers page-link" href="#" data-page= {{ dataPage }}>{{ label }}</a>
                            </li>
                        {{ /pages }}

                    <li class="page-item {{ disabledNext }}">
                        <a class="page-link prev-next" href="#" data-prevNext='next'>Next</a>
                    </li>
                {{ /pagination }}

            </ul>
        </nav>
    </div>
    `;
    let currentPage = 0;
    const usersPerPage = 10;
    const totalPages = Math.ceil(users.length / usersPerPage);
    console.log(totalPages);

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
    const disabledPrevNext = currentPage => {
        let prevNextBtn = [
            {
                disabledPrev: currentPage === 0 ? 'disabled' : '',
                disabledNext: currentPage === totalPages - 1 ? 'disabled' : ''
            }
        ];
        return prevNextBtn;
    };

    document.querySelector('#root').innerHTML = Mustache.render(tpl, {
        users: users.slice(currentPage * usersPerPage, usersPerPage * (currentPage + 1)),
        pages: getPages(currentPage),
        pagination: disabledPrevNext(currentPage)
    });

    document.querySelector('#root').addEventListener('click', e => {
        e.preventDefault();

        if (e.target.matches('.card-link')) {
            const id = e.target.getAttribute('data-id');
            document.querySelector('#more-info-' + id).classList.toggle('d-none');
        }

        if (e.target.matches('.page-numbers')) {
            currentPage = e.target.getAttribute('data-page') * 1;
            console.log(currentPage);
            document.querySelector('#root').innerHTML = Mustache.render(tpl, {
                users: users.slice(currentPage * usersPerPage, usersPerPage * (currentPage + 1)),
                pages: getPages(currentPage),
                pagination: disabledPrevNext(currentPage)
            });
        }

        if (e.target.matches('.prev-next')) {
            e.target.getAttribute('data-prevNext') === 'next' ? currentPage++ : currentPage--;

            document.querySelector('#root').innerHTML = Mustache.render(tpl, {
                users: users.slice(currentPage * usersPerPage, usersPerPage * (currentPage + 1)),
                pages: getPages(currentPage),
                pagination: disabledPrevNext(currentPage)
            });
        }
    });
};
RUN();
