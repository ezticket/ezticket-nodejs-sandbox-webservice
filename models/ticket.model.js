const helper = require('../helpers/helper.js');

function scan (ticketId, newScan) {
    return new Promise((resolve, reject) => {
        data = { ticketId, newScan };
        resolve(data);
    });
}

function sell (tickets) {
    return new Promise((resolve, reject) => {
        resolve(tickets);
    });
}

function resell (tickets) {
    return new Promise((resolve, reject) => {
        resolve(tickets);
    });
}

module.exports = {
    scan,
    sell,
    resell
};
