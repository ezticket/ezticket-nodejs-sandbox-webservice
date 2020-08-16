var owners = require("../data/owners.json");
const helper = require("../helpers/helper.js");
const eventContract = require("../models/contract.model");
const contract = new eventContract().getInstance();

async function getOwners(ticketId) {
  console.log("Getting owners for: ", ticketId);
  const owners = await contract.methods
    .getPurchasers(ticketId)
    .call({ from: process.env.ADDRESS });

  return new Promise((resolve, reject) => {
    resolve(owners);
  });
}

module.exports = { getOwners };
