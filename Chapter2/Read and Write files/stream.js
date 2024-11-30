const fs = require('fs');

const rs = fs.createReadStream('./files/global-warning.txt', {econding: 'utf8'});

const ws = fs.createWriteStream('./files/new-global-warning.txt');

/* rs.on('data', (datachunk) => {
  ws.write(datachunk)
}) */

rs.pipe(ws);