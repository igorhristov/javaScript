const express = require('express');
const app = express();
const moment = require('moment');
const port = 3000;
const TIME_FORMAT = 'DD MM YYYY';
app.get('/', (req, res) => {
    res.send(`hello world this is query exercise for dates`);
});

app.get('/ts-to-human', (req, res) => {
    const { time } = req.query;
    // console.log(+time);

    try {
        if(+time !== moment.unix(+time).utc().unix()) {
            throw new Error('Invalid Timestamp')
        }
    } catch(err) {
        return err
    }

    const timeFromUnix = moment.unix(+time);
    const unixToTs = moment(timeFromUnix).utc().format(TIME_FORMAT);

    return res.json({
        date :(`send time is ${unixToTs}`),
        time

    })
});
/*
app.get('/ts-to-human', (req, res) => {
    const { ts } = req.query // ts --> seconds since 01-01-1970
    try {
        if (+ts !== moment.unix(+ts).utc().unix()) {
            throw new Error('Invalid timestamp')
        }
    } catch (err) {     
        // Handle Error
    }
    return res.json({
        date: moment.unix(+ts).utc().format(DATE_FORMAT),
        ts
    })
})
*/
app.get('/human-to-ts', (req, res) => {
    const dateTime = req.query.date;

   const date = moment(`${dateTime}`, `${TIME_FORMAT}`).utc(+2).format()
   const timestamp = moment(date).format("X");

    res.send(`${dateTime} in secunds ${timestamp}`);
});

app.listen(port, () => console.log(`frontend server for time is runing at  localhost:${port}`));
