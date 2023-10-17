## Langkah-langkah Menjalankan Proyek Hardhat dengan Smart Contract Perpustakaan

### Langkah 1: Inisialisasi Proyek

1. Buka terminal.

2. Masuk ke direktori proyek Anda dengan menggunakan perintah `cd nama-direktori-proyek`.

3. Instal Hardhat dengan perintah berikut:

```sh
npm install --save-dev hardhat
```

#### Inisialisasi proyek Hardhat dengan menjalankan perintah:

```sh
npx hardhat init
```

Pilih opsi "Create an empty hardhat.config.js".

#### Instal dependensi tambahan dengan perintah:

```sh
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox solc chai
```

Proyek Hardhat Anda sudah siap untuk digunakan.

### Langkah 2: Buat File Smart Contract

Buat kode smartcontract Perpustakaan ke dalam file `Perpustakaan.sol` dalam direktori `contracts`.

### Langkah 3: Konfigurasi Hardhat

1. Buka file `hardhat.config.js` dalam direktori proyek.

2. Pastikan file konfigurasi terlihat seperti ini:

   ```javascript
   require("@nomicfoundation/hardhat-toolbox");

   module.exports = {
     solidity: "0.8.20",
     networks: {
       hardhat: {},
     },
     paths: {
       sources: "./contracts",
       tests: "./test",
     },
   };

### Langkah 4: Buat Script Deployment dan Testing

1. Buat direktori `scripts`dan `test` dalam root proyek Anda.

2. Buat Script deployment dalam direktori `scripts` dan buat script testing dalam direktori `test` sesuai dengan langkah-langkah berikut:

   a. Deployment Script (`deploy.js`): Script untuk mendeploy smart contract.

   b. Testing Script (`perpustakaan.test.js`): Script untuk menulis dan menjalankan test cases.

3. Simpan Script-Script tersebut dalam direktori masing-masing.

### Langakh 5: Menjalankan Script

1. Untuk menjalankan Script deployment, gunakan perintah berikut:

```sh
npx hardhat run scripts/deploy.js
```

2. Untuk menjalankan Script testing, gunakan perintah berikut:

```sh
npx hardhat test
```

3. Pastikan semua script dijalankan dengan sukses.

### Langkah 6: Menjalankan Testing (Happy Path & Sad Path)

1. Pastikan Anda telah mengimplementasikan test cases sesuai dengan fitur-fitur yang Anda inginkan dalam script testing (`test.js`).

2. Jalankan perintah berikut untuk menjalankan semua test cases:

```sh
npx hardhat test
```

#### Alternatif perintah dari hardhat

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
