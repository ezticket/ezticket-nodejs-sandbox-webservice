const helper = require("../helpers/helper.js");
const eventContract = require("../models/contract.model");
const contract = new eventContract().getInstance();

async function scan(ticketId, newScan) {
  console.log("Scanning: ", ticketId);
  console.log(newScan);
  const scanned = await contract.methods
    .addScan(ticketId, newScan.scanDescription, newScan.createdAt)
    .send({ from: process.env.ADDRESS });

  return new Promise((resolve, reject) => {
    resolve(scanned.transactionHash);
  });
}

async function sell(tickets) {
  console.log("Starting sell: ", tickets);
  var ticketsIds = [];
  var usersIds = [];
  var purchasedAt = [];
  var today = new Date().toISOString();
  console.log("On " + today);
  tickets.forEach(ticketInfo => {
    ticketsIds.push(ticketInfo.ticketId);
    usersIds.push(ticketInfo.buyerId);
    purchasedAt.push(today);
  });
  const newSale = await contract.methods
    .addTicketList(ticketsIds, usersIds, purchasedAt)
    .send({ from: process.env.ADDRESS });

  return new Promise((resolve, reject) => {
    resolve(newSale.transactionHash);
  });
}

async function resell(tickets) {
  console.log("Starting resell: ", tickets);
  var today = new Date().toISOString();
  console.log("On " + today);
  const newReSale = await contract.methods
    .addPurchasers(tickets.ticketId, tickets.buyerId, today)
    .send({ from: process.env.ADDRESS });

  return new Promise((resolve, reject) => {
    resolve(newReSale.transactionHash);
  });
}

module.exports = {
  scan,
  sell,
  resell
};
