module.exports = () => `
<div class="container">
<div class="row">
    <div class="px-md-4 text-center m-2">
        {{#articles}}
            <div class="card my-3">
                <div class="card-body bg-dark text-light border border-info shadow rounded">
                    <!--- card body: -->
                    <p class="text-left">Article:  
                        <span class='text-muted ml-2 ml-md-3'>{{ date }}</span>
                    </p>
                    
                    <!-- header -->
                    <a class="card-link text-warning" href="./article-{{ id }}.html">
                        <h3 class="text-center mb-4"> {{ title }} </h3>
                    </a>
                    <!-- header -->
                    <!--- author start -->
                    {{#author}}
                    <div class="row">
                            <div class="col-12  col-md-3 col-xl-3">
                                <a href="./author-{{id}}.html">
                                    <img src="{{{ avatar }}}" class="rounded-circle" width="90" height="90">
                                </a>
                            </div>
                            <div class="col-12  col-md-4 col-xl-3 my-3 my-md-0">
                                <span class="text-muted text-center">
                                    Author
                                </span> </br>
                                <span class="text-center">
                                    <a class="card-link rounded-pill border border-warning text-warning pb-1 px-2" href="./author-{{ id }}.html">
                                        {{ name }} 
                                    </a>
                                </span>
                            </div>
                    {{/author}}
                    <!--- author end -->
                            <div class="col-12  col-md-4 col-xl-3 ml-auto ml-md-0">
                                <span class="text-muted text-center">
                                    {{ comments.length }} comments
                                </span> </br>
                                <a class="card-link rounded-pill border border-warning text-warning pb-1 px-2" href="./article-{{ id }}.html#commentReplay"> 
                                    Join Conversation -> 
                                </a>
                            </div>
                    </div>
                    <div class="message text-left mt-4 mb-2">                   
                        <p class="card-text">{{ summary }}..</p>
                    </div>
                    <div class="actions mb-4">
                        <a href="./article-{{ id }}.html" class="card-link btn btn-outline-warning">Read article >>></a>
                    </div>
                    <div class="row ">
                        <div class="text-center mx-auto">
                            {{#tags}}
                                <a href="./tag-{{ slug }}.html" class="card-link rounded-pill border border-info text-info pb-1 px-2 mx-2 ml-md-4"> {{ title }} </a>
                            {{/tags}}
                        </div>
                    </div>
                    <!--- cardBodyEnd -->
                </div>
            </div>
        {{/articles}}
    </div>
</div>
</div>
`;
