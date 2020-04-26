const createHeader = require('./createHeader');
const createFooter = require('./createFooter');
const createArticleCard = require('./createArticleCard');
module.exports = () => {
  const homepageHeader = createHeader();
  const homepageFooter = createFooter();
  const authorArticleCard = createArticleCard();
  return `
    ${homepageHeader}
    {{#author}}
    <nav class="text-center bg-dark text-light">
            <ol class="breadcrumb bg-dark">
                <li class="breadcrumb-item"><a href="./">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Author</li>
            </ol>
        
        <img src="{{ avatar }}" class="rounded-circle border border-warning border-top-0 ml-5 mx-auto" width="128" height="128">
        <h2 class="font-weight-bold text-warning mt-2 mx-auto text-center"> {{name}} </h2>
        <p class="lead text-center mx-auto p-2">{{ bio }}</p>
        <p class="ml-5 text-info my-1 mx-auto">www: {{ website }}</p>
        <p class="ml-5 text-info my-0 mx-auto">email: {{ email }}</p>
        <p class="text-center mr-5 my-0 mx-auto">{{username}} have {{articles.length}} Articles</p>
        </nav>
    ${authorArticleCard}
    {{/author}}
    
    ${homepageFooter}`;
};
