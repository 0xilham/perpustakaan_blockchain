async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Perpustakaan = await ethers.getContractFactory("Perpustakaan");
  const perpus = await Perpustakaan.deploy();
  await perpus.waitForDeployment()
  console.log(`Deployed contract to: ${perpus.target}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
