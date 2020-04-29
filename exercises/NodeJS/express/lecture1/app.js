const posts = require('./data/posts.json')
const express = require('express')
const app = express();
const port = 3001;
app.get('/', (req, res) => {
    res.send(`
    <h1 style="text-align: center">Hello WOrld ajdee</h1> 
    <h2> testing live server</h2>
    `)
})

// adding routes
app.get('/blog/:title?', function(req, res) {
    const title = req.params.title;
    if(title === undefined) {
        res.status(503)
        res.send("this Page is under counstruction")
    } else {
        const post = posts[title]
        res.send(post)
    }
})

app.listen(port, () => console.log(`frontend server is runing at  http://localhost:${port}`))