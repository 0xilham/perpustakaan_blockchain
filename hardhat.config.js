require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  networks: {
    polygon: {
      url: "http://localhost:8545", // Ganti dengan URL RPC testnet Polygon Mumbai
      accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"], // Ganti dengan kunci pribadi akun yang akan digunakan
    },
  },
  solidity: {
    version: "0.8.20", // Sesuaikan versi Solidity sesuai dengan kontrak Anda
  },
};
