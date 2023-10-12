const { ethers } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying Perpustakaan contract...");
  const Perpustakaan = await ethers.getContractFactory("Perpustakaan");
  const perpustakaan = await Perpustakaan.deploy();
  await perpustakaan.deployed();

  console.log("Perpustakaan contract deployed to:", perpustakaan.address);

  // Additional deployments or configurations can go here

  // Verifikasi kontrak
  const { address } = perpustakaan;
  console.log("Verifying Perpustakaan contract at address:", address);
  
  // Lakukan verifikasi kontrak menggunakan Hardhat
  await hre.run('verify:verify', {
    address,
    constructorArguments: [],
  });

  console.log("Perpustakaan contract verified.");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
