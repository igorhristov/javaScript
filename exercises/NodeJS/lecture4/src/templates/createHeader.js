module.exports = (title = 'Collaborative Frontend Project') => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>${title}</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav">
            <a href="./" class="nav-item nav-link active">Home</a>
            <a href="./authors.html" class="nav-item nav-link">All Authors</a>
          </div>
          <div class="navbar-nav ml-auto">
            <form class="form-inline ml-auto">
              <input type="text" class="form-control mr-sm-2" placeholder="Search">
              <button type="submit" class="btn btn-outline-light">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </header>
  
  <!-- BEGIN id="content" -->
  <div id="content">`;