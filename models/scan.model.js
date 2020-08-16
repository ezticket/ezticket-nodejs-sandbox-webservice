var scans = require("../data/scans.json");
const helper = require("../helpers/helper.js");
const eventContract = require("../models/contract.model");
const contract = new eventContract().getInstance();

async function getScans(ticketId) {
  console.log("Getting scans for: ", ticketId);
  const scans = await contract.methods
    .getScans(ticketId)
    .call({ from: process.env.ADDRESS });

  return new Promise((resolve, reject) => {
    resolve(scans);
  });
}

module.exports = { getScans };
