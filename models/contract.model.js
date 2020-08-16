const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Event = require('../build/contracts/Event.json');

class Contract {
    constructor () {
        const privateKey = '0xa446fb3d32c9722973389759853f98534270249439ca5167e5822382fa0281ee';

        if (!Contract.instance) {
            const provider = new HDWalletProvider(
                privateKey,
                'https://ropsten.infura.io/v3/37570d6f7c744976ab77ea208c574bcf'
            );
            const web3 = new Web3(provider);
            Contract.instance = new web3.eth.Contract(
                Event.abi,
                '0xb6446f5da4ab07d642df22a5a556e64a2f70e845'
            );
        }
    }

    getInstance () {
        return Contract.instance;
    }

    getAddress () {
        return '0x3f9D9EFB08E314Eba444A231BDF321B711Fc32bc';
    }
}

module.exports = Contract;
