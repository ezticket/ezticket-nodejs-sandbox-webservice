const Migrations = artifacts.require("Migrations");
const Event = artifacts.require("Event");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Event);
};
