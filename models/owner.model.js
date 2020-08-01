var owners = require('../data/owners.json');
const helper = require('../helpers/helper.js');

function getOwners (ticketId) {
    return new Promise((resolve, reject) => {
        if (owners.length === 0) {
            reject({
                message: 'No owners available',
                status: 202
            });
        }

        resolve(owners);
    });
}

module.exports = { getOwners };
