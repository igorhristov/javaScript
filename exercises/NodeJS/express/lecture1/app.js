const express = require('express')
const app = express();
const port = 3001;
app.get('/', (req, res) => {
    res.send('<h1 style="text-align: center">Hello WOrld ajdee</h1>')
})

app.listen(port, () => console.log(`frontend server is runing at  http://localhost:${port}`))