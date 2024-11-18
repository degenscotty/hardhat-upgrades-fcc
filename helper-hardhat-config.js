const { ethers } = require("hardhat")

const networkConfig = {
    11155111: {
        name: "sepolia",
    },
    4002: {
        name: "fantom_testnet",
    },
    80002: {
        name: "amoy",
    },
    31337: {
        name: "localhost",
    },
}

const VERIFICATION_BLOCK_CONFIRMATIONS = 6

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
}
