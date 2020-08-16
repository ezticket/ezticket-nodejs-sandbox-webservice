const fs = require('fs');
const { Table } = require('console-table-printer');

function loadEnvironment() {
    const NODE_ENV = process.env.NODE_ENV || 'development';

    console.log('Environment config file:', `'.env.${NODE_ENV}'`);

    if (fs.existsSync(`.env.${NODE_ENV}`)) {

        require('dotenv').config({
            path: `.env.${NODE_ENV}`
        });

        console.info('Environment config file loadeed Ok');
    }
    else {
        console.console.warn('Error loading environment file');
    }

    printEnvironment();
}

printEnvironment = () => {
    const environmentList = ['ENV', 'CANAL', 'ADDRESS', 'TEST_1', 'PRIVATEKEY'];

    try {

        const myTable = new Table({
            columns: [
                { name: 'index', alignment: 'center' },
                { name: 'Const Name', alignment: 'left' },
                { name: 'Value', alignment: 'left' },
            ],
        });

        for (let index = 0; index < environmentList.length; index++) {
            const element = environmentList[index];

            myTable.addRow({ index: index+1, 'Const Name': element  , Value: process.env[element] ? process.env[element] : 'LOST'  }, { color: process.env[element] ? 'green' : 'red' });
        }

        myTable.printTable();
    } catch (error) {
        console.error('Error in printEnvironment',error);
    }
};

exports.loadEnvironment = loadEnvironment;
