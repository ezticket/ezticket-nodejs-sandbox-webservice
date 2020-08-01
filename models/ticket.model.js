const helper = require('../helpers/helper.js');

function scan (ticketId, newScan) {
    return new Promise((resolve, reject) => {
        data = { ticketId, newScan };
        resolve(data);
    });
}

module.exports = { scan };
