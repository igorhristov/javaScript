# File System
To use this module:
    ```
    const fs = require('fs');
    ```
All file system operations have synchronous and asynchronous forms.

The asynchronous form always takes a completion callback as its last argument. The arguments passed to the completion callback depend on the method, but the first argument is always reserved for an exception. If the operation was completed successfully, then the first argument will be null or undefined.

## fs.readFile(path[, options], callback)

## fs.readFileSync(path[, options])

## fs.writeFile(file, data[, options], callback)

## fs.writeFileSync(file, data[, options])
