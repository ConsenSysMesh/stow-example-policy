var DoNotAllowS3Policy = artifacts.require("./DoNotAllowS3Policy.sol");

module.exports = function(deployer) {
  deployer.deploy(DoNotAllowS3Policy);
};
