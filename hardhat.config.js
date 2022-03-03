/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
const { API_URL_MUMBAI, API_URL_POLYGON, POLYSCAN_API_KEY, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      }
    }
  },
   defaultNetwork: "mumbai",
   networks: {
      hardhat: {
        chainId: 1337
      },
      mumbai: {
          url: API_URL_MUMBAI,
          accounts: [`0x${PRIVATE_KEY}`],
          gasMultiplier: 3,
          gasPrice: 1000000000 * 2
      },
      polygon: {
          url: API_URL_POLYGON,
          accounts: [`0x${PRIVATE_KEY}`]
      }
   },
   etherscan: {
     apiKey: POLYSCAN_API_KEY
   }
}

// npx hardhat verify --network mumbai 
