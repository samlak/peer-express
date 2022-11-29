const { ethers } = require("hardhat");

const networkConfig = {
    80001: {
        name: "mumbai",
    },
    31337: {
        name: "localhost",
    },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
    networkConfig,
    developmentChains,
};
