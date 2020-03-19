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
        `;

    const usersMarkUp = Mustache.render(TEMPLATE, { users: users });
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