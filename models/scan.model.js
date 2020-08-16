var scans = require("../data/scans.json");
const helper = require("../helpers/helper.js");
const eventContract = require("../models/contract.model");
const contract = new eventContract().getInstance();

async function getScans(ticketId) {
  const newSale = await contract.methods
    .getTotalSales()
    .call({ from: process.env.ADDRESS });
  console.log(newSale);

  return new Promise((resolve, reject) => {
    if (scans.length === 0) {
      reject({
        message: "No scans available",
        status: 202
      });
    }

    resolve(scans);
  });
}

module.exports = { getScans };
