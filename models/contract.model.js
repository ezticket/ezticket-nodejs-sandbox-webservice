const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Event = require("../build/contracts/Event.json");

class Contract {
  constructor() {
    const PRIVATE_KEY = process.env.PRIVATE_KEY;

    if (!Contract.instance) {
      const provider = new HDWalletProvider(
        PRIVATE_KEY,
        process.env.CONTRACT_NET
      );
      const web3 = new Web3(provider);
      Contract.instance = new web3.eth.Contract(
        Event.abi,
        process.env.CONTRACT_ADDRESS
      );
    }
  }

  getInstance() {
    return Contract.instance;
  }

  getAddress() {
    return process.env.CONTRACT_ADDRESS;
  }
}

module.exports = Contract;
