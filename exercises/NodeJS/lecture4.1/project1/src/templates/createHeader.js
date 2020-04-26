module.exports = (title = 'Collaborative Frontend Project') => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>${title}</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body class="bg-warning">
  
  <nav class="navbar navbar-expand navbar-dark bg-dark">
  <a class="navbar-brand position-absolute position-fixed m-0 p-0" href="./" style="z-index: 1;">
      <!--<img class="m-0 p-0" src="./assets/team-b.png" width="64" class="d-inline-block align-top" alt="team b" />-->
      <span class="m-0 p-0 d-inline-block align-top">Igor Hristov</span>
  </a>
  <div class="navbar-collapse collapse">
      <ul class="navbar-nav m-auto">
          <li class="nav-item ml-3 ml-sm-1 my-auto">
              <a class="nav-link btn btn-lg btn-outline-primary p-sm-1 p-md-4" href="./">Home</a>
          </li>
          <li class="nav-item m-1 my-auto">
              <a class="nav-link btn btn-lg btn-outline-primary p-sm-1 p-md-4" href="./authors.html">Authors</a>
          </li>
      </ul>
  </div>
</nav>
<header class="container-fluid bg-dark text-light">
  <div class="row">
      <div class="mx-auto my-3">
        <form class="form-inline mx-auto">
          <div class="form-group mr-2">
            <input class="form-control" type="search" id="search-bar" placeholder="Search" />
          </div>
          <div class="form-group">
            <a class="form-control btn btn-outline-info" id="serach-btn" type="submit">Search</a>
          </div>
        </form>
      </div>
    </div>
</header>
  
  <!-- BEGIN id="content" -->
  <div id="content">`;
