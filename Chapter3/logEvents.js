const { format } = require('date-fns');
const { v4: id } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

async function logEvents(msg) {
  const dateEvent = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
  const logItem = `${dateEvent}\t${id()}\t${msg}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, 'logs'))) {
      await fsPromises.mkdir(path.join(__dirname, 'logs'))
    }
    await fsPromises.appendFile(path.join(__dirname, 'logs', 'logEvents.txt'), logItem)
  } catch (err) {
    console.error(err);
  };
}

const hello = 'hello';

module.exports = logEvents;