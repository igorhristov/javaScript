const exepress = require('express');
const app = exepress();
const routes = require('./src/routes');
const port = 3000;

app.use(exepress.json())
app.use('/' , routes);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))