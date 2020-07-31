var scans = require('../data/scans.json');
const helper = require('../helpers/helper.js');

function getScans () {
    return new Promise((resolve, reject) => {
        if (scans.length === 0) {
            reject({
                message: 'no scans available',
                status: 202
            });
        }

        resolve(scans);
    });
}

module.exports = { getScans };
