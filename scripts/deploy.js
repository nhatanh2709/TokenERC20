async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  const Token = await ethers.getContractFactory("Floppy")
  const hardhatToken = await Token.deploy();

  console.log("Token address:", await hardhatToken.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });