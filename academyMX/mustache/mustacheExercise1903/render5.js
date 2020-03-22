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

                <div id="more-info-{{id}}" class="message d-none" >
                    <p class="card-text">Gender: {{gender}} BirthYear: {{birthYear}} Salary: {{salary}}</p>
                </div>

            </div>
        </div>
    {{/users}}
    `;
    const currentPage = 1;
    const usersPerPage = 2;
    const maxPages = Math.ceil(users.length / usersPerPage);
    console.log(maxPages);

    document.querySelector('#root').innerHTML = Mustache.render(tpl, {
        users: users.slice((currentPage - 1) * usersPerPage, usersPerPage * currentPage)
    });

    document.querySelector('#root').addEventListener('click', e => {
        e.preventDefault();

        if (e.target.matches('.card-link')) {
            const id = e.target.getAttribute('data-id');
            document.querySelector('#more-info-' + id).classList.toggle('d-none');
        }
    });
};
RUN();
