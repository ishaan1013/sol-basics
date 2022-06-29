require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/a-rpDeR9TY12Ugo_bTXdK_8c-SP2TM-4",
      accounts: ["2200b89f5ba00a9b97f7f28502af4636a367af8b52384a8bfad9c2ebbbafdfa5"]
    }
  }
}