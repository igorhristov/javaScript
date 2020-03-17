async function renderHello() {
  const users = await getUsers();
  var view = `<table class="table bg-primary text-danger table-hover">
      <thead>
          <tr>
              <th>#</th>
              <th>Birth Year</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th class="text-right">Action</th>
          </tr>
      </thead>
      <tbody>
          {{ #users }}
              <tr>
                  <td>{{ id }}</td>
                  <td>{{ birthYear }}</td>
                  <td>{{ firstName }}</td>
                  <td>{{ lastName }}</td>
                  <td class="text-right">
                      <button class="btn btn-outline-primary">Info</button>
                  </td>
              </tr>
          {{ /users }}
      </tbody>
  </table>`;
  var output = Mustache.render(view, { users: users });
  document.getElementById('root').innerHTML = output;
}
renderHello();
