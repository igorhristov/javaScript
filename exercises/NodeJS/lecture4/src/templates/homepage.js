const createHeader = require('./createHeader');
const createFooter = require('./createFooter');

module.exports = () => {
  const homepageHeader = createHeader();
  const homepageFooter = createFooter();

  return `
    ${homepageHeader}

    <div class="container">
        {{#articles}}
        <div class="card border border-dark mt-4 col-12">
            <div class="card-body">
                <a href="/article-{{id}}.html#comments-anchor">
                    <h6 class="float-right text-warning">{{comments.length}} comments</h6>
                </a>
                <a class="text-warning text-decoration-none" href="/article-{{id}}.html">
                    <h5>{{title}}</h5>
                </a>
                <p class="mb-3">{{date}}</p>
                <p class="card-text mb-1">
                    {{summary}}
                </p>

                {{#tags}}
                <a class="text-warning text-decoration-none pr-2" href="/tag-{{slug}}.html">
                    <b>{{title}}</b>
                </a>
                {{/tags}}

                <div>
                {{#author}}
                    <div class="float-left pr-3">
                        <a href="/author-{{id}}.html">
                            <img class="rounded-circle border border-warning img-border mt-3" width="64" height="64" src="{{{avatar}}}" />
                        </a>
                    </div>
                    <div class="float-left ">
                        <h6 class="card-subtitle mt-4 text-muted">Author:</h6>
                        <a class="text-warning text-decoration-none h-25 d-inline-block" href="/author-{{id}}.html">
                            <h4>{{name}}</h4>
                        </a> 
                    </div>
                {{/author}}
                </div>
                <a href="/article-{{id}}.html" class="float-right btn btn-warning mt-5">Read article</a>
            </div>
        </div>
        {{/articles}}
    </div>

    ${homepageFooter}`;
};
