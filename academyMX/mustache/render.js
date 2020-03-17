async function renderHello() {
    const users = await getUsers();
    var view = {
        title: "Joe",
        calc: function () {
          return 2 + 4;
        }
      };
      
      var output = Mustache.render("{{title}} helo {{calc}}", view);
  
    console.log(users);
    /*
    {{#users}}
    <table>
    </table>
{{/users}}
*/
    var template = document.getElementById('root').innerHTML;
    var rendered = Mustache.render(template, { name: 'Luke' });
    document.getElementById('root').innerHTML = output;
  }
  renderHello()