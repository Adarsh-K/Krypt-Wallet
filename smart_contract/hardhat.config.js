require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/H1cq_QGbVsLzRQyniH0B-MGgBFfcJL-Y',
      accounts: ['b64d51028bca096e582a435a6c809673a83557a263be0edafc95886b7a3da688'],
    },
  },
};