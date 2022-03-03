require('dotenv').config();
const API_URL_POLYGON = process.env.API_URL_POLYGON;
const API_URL_MUMBAI = process.env.API_URL_MUMBAI;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const signer = new ethers.Wallet(PRIVATE_KEY, ethers.provider);

async function main() {
    const Ukraine = await ethers.getContractFactory("Ukraine");
    const myUkraine = await Ukraine.deploy(); // Instance of the contract 
    console.log("Contract deployed to address:", myUkraine.address);
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});

// npx hardhat run scripts/deploy.js --network mumbai
// npx hardhat verify --network mumbai DEPLOYED_CONTRACT_ADDRESS