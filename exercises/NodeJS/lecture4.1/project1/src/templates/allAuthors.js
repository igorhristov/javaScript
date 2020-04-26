const createHeader = require('./createHeader');
const createFooter = require('./createFooter');

module.exports = () => {
    const homepageHeader = createHeader();
    const homepageFooter = createFooter();

    return `
    ${homepageHeader}
    <div class="container-fluid px-5">
        <div class="row">
            {{#authors}}
                <div class="col-12 col-sm-6 col-md-4 col-xl-3">
                    <div class="card my-3 border-0 bg-dark">
                        <div class="card-body text-light text-center border border-info rounded shadow">
                            <img src="{{{ avatar }}}" class="rounded-circle border border-warning border-top-0" width="128" height="128">
                            
                            <a class="card-link text-warning " href="./author-{{ id }}.html">
                                <h3 class="my-3">{{ name }}</h3>
                            </a>
                            <div class="message">                   
                                <p class="card-text text-left">{{ bio }}</p>
                            </div>
                            <div class="actions my-2">
                                <a href="#" class="card-link">www: {{ website }}</a> 
                            </div>
                            <div class="actions">
                                <a href="mailto:{{ email }}" class="card-link">mail: {{ email }}</a>
                            </div>
                            <p class="mt-2">wrote {{ articles.length }} articles</p>
                            <hr class="w-100 mb-1 mt-0 rounded-pill bg-warning" />
                        </div>
                    </div>
                </div>    
            {{/authors}}
        </div>
    </div>
    ${homepageFooter}`;
};