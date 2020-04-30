const express = require('express');
const app = express();
const moment = require('moment');
const port = 3000;
const TIME_FORMAT = 'DD MM YYYY';
app.get('/', (req, res) => {
    res.send(`hello world this is query exercise for dates`);
});

app.get('/ts-to-human', (req, res) => {
    const tsTime = req.query.time;

    const timeFromUnix = moment.unix(tsTime);
    const unixToTs = moment(timeFromUnix).utc().format(TIME_FORMAT);
    res.send(`${tsTime} send time is ${unixToTs}`);
});

app.get('/human-to-ts', (req, res) => {
    const dateTime = req.query.date;

   const date = moment(`${dateTime}`, `${TIME_FORMAT}`).utc(+2).format()
   const timestamp = moment(date).format("X");

    res.send(`${dateTime} in secunds ${timestamp}`);
});

app.listen(port, () => console.log(`frontend server for time is runing at  localhost:${port}`));
