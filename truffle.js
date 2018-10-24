require('dotenv').load();

require('babel-register')({
  ignore: /node_modules\/(?!openzeppelin-solidity)/
});
require('babel-polyfill');

const HDWalletProvider = require('truffle-hdwallet-provider');

const privateKey = process.env.LINNIA_ETH_INFURA_ROPSTEN_HUB_OWNER_PRIVATE_KEY;
const privKeys = [privateKey.toLowerCase()];

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: '*' // Match any network id
    },
    ropsten: {
      provider() {
        return new HDWalletProvider(
           privKeys,
           `https://ropsten.infura.io/${process.env.LINNIA_ETH_INFURA_ROPSTEN_KEY}`
        );
      },
      network_id: 3,
      gas: 5000000,
      gasPrice: 10000000000
    }
  }
};
