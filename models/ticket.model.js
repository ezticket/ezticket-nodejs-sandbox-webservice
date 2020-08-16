const helper = require("../helpers/helper.js");
const eventContract = require("../models/contract.model");
const contract = new eventContract().getInstance();

function scan(ticketId, newScan) {
  return new Promise((resolve, reject) => {
    data = { ticketId, newScan };
    resolve(data);
  });
}

async function sell(tickets) {
  console.log("Starting sell: ", tickets);
  var ticketsIds = [];
  var usersIds = [];
  var purchasedAt = [];
  var today = new Date().toISOString();
  tickets.forEach(ticketInfo => {
    ticketsIds.push(ticketInfo.ticketId);
    usersIds.push(ticketInfo.buyerId);
    purchasedAt.push(today);
  });
  const newSale = await contract.methods
    .addTicketList(ticketsIds, usersIds, purchasedAt)
    .send({ from: process.env.ADDRESS });
  console.log(newSale);
  console.log(newSale.transactionHash);

  return new Promise((resolve, reject) => {
    resolve(newSale.transactionHash);
  });
}

function resell(tickets) {
  return new Promise((resolve, reject) => {
    resolve(tickets);
  });
}

module.exports = {
  scan,
  sell,
  resell
};
