const fs = require('fs');

// sync version
// const readMeSync = fs.readFileSync('readme.md')
// console.log(readMeSync.toString());

// fs.writeFileSync('writeMeSync.txt', readMeSync)

// async version

fs.readFile('readme.md', 'utf8', function (err, data) {
    if(err) {
        throw err;
    }
    console.log(data.toString());
    fs.writeFile('writeMeAsync.txt',data, (err) => {
        if(err) {
            throw err
        }
        console.log('file has bee saved');
        
    })
});

console.log('test');
