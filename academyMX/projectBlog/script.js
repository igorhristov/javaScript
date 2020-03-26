const RUN = async _ => {
    const users = await getUsers();
    const tpl = `
    {{#users}}

        <! --====== od tuka pocnuva karta za main artiklite ====-->

             <! -- imame card clasa i margin nekoj -->
        <div class="card my-3">

                <! -- imame card body i stilizirane na celata karta i textot -->
            <div class="card-body bg-dark text-light">

                <! -- predlagam h4 za article (nazivot) i datata  -->
                <h4>
                    Article 

                    <! --  datata moze clasa muted i najglavnoto e da prikazeme articleData  -->
                 <span class='text-muted'>Mart 26 2020 articleData <- {{ articleData }}</span>
                </h4>

                    <! --  naslovot na artiklot i nejzino prikazuvanje  -->
                <h2 class="pb-3"> articleName to be here <- {{ articleName }} </h2>

                    <! --  poseben div za slikata autor i brojot na komentari  -->
                <div class="row image-autorName-comments mb-4">
                    <div class="col-10">
                        <div class="row">

                            <div class="col-2">
                                <img src="{{ avatar }}" class="rounded-circle" width="64" height="64">
                            </div>

                            <div class="col-5">
                                <span class="text-muted text-center">Autor</span> </br>
                                <span class="text-center">{{ firstName }} {{ lastName }} <- </span>
                            </div>

                            <div class="col-5">
                                <span class="text-muted text-center">{{numberOfComments}} Comments</span> </br>
                                <span class="text-center">Join Conversation -> </span>
                            </div>
                    
                        </div>
                    </div>
                </div> 


                    <! --  poseben div za skrateniot del od artikalot  -->              
                <div class="message mb-4">                   
                    <p class="card-text">{{ articleShortText }} article short text ke bide tuka ispisan mos treba da napravime makedonski loren ipsem i kak ke se vika taj na makedonski koj znaa. Ne e loso da se razmisluva na takava tema nekojpat a cao...</p>
                </div>

                    <! --  poseben div za link do artikle pageto  -->           
                <div class="actions">
                    <a href="#" class="card-link" articlePage-link={{ linkToPageArtikles }}>Read More</a>
                </div>

                    <! --  poseben div za do tagoviteto  -->       
                <div class="actions">
                    <a href="#" class="card-link" tags-link={{ linkToTags }}>tags1 </a>
                    <a href="#" class="card-link" tas-link={{ linkToPageArtikles }}>tags2 </a>
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
