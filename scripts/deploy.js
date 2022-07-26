require("@nomiclabs/hardhat-ethers");

async function main() {
    const BlockFuse = await ethers.getContractFactory("BlockFuse");
    const blockfuse = await BlockFuse.deploy("hai");
    await blockfuse.deployed();
    console.log("BlockFuse address:", blockfuse.address); // eslint-disable-line no-console
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error); // eslint-disable-line no-console
        process.exit(1);
    });
