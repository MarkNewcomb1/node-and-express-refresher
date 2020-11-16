const EventEmitter = require('events');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');
class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', { id: uuid.v4(), msg });
        fs.appendFile(path.join(__dirname, '/log', 'logs.txt'), `${msg}\r`, (err) => {
            if (err) throw err;
            console.log('File written to...')
        })
    }
}

module.exports = Logger;