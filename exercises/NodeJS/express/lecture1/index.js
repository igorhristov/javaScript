const express = require('express')
const app = express();
const moment = require('moment');
const port = 3000;

app.get('/', (req, res) => {
    res.send(`hello world this is query exercise for dates`)
})

app.get('/ts', (req, res) => {
   const tsTime =  req.query.time;
   const timeFromUnix = moment.unix(tsTime * 1)
   console.log(timeFromUnix);
   const unixToTs = moment(timeFromUnix).format('Do MM YYYY')
   res.send(unixToTs)
})

app.get('/unix', (req, res) => {
    const dateTime =  req.query.date * 1;
    // const arr = dateTime.split(' ')
    // const formatDate = arr.join('/')
    const dateInNumber = moment.utc(dateTime, "D/M/YYYY/hh/mm").unix
    const parseUnix = moment.unix(dateInNumber)
    res.send(dateInNumber)
 })
 //moment.unix(ts);

app.listen(port, () => console.log(`frontend server for time is runing at  localhost:${port}`))
