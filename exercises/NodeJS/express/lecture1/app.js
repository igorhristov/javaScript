const posts = require('./data/posts.json')
const express = require('express')
const app = express();
const port = 3001;
app.get('/', (req, res) => {
    res.send('<h1 style="text-align: center">Hello WOrld ajdee</h1>')
})

// adding routes
app.get('/blog', function(req, res) {
    res.send(posts)
})

app.listen(port, () => console.log(`frontend server is runing at  http://localhost:${port}`))