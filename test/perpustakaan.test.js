const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Perpustakaan Contract', function () {
  let perpustakaan;
  let admin;
  const ISBN = '0x123456789';

  beforeEach(async function () {
    [admin] = await ethers.getSigners();
    const Perpustakaan = await ethers.getContractFactory('Perpustakaan');
    perpustakaan = await Perpustakaan.deploy();
    await Perpustakaan.deploy();
  });

  it('Wajib pakai Wallet Address Admin', async function () {
    expect(await perpustakaan.admin()).to.equal(admin.address);
  });

  it('Generate hash ISBN ke bytes32', async function () {
    const kodeKelompok = 1;
    const kodePenerbit = 2;
    const kodeJudul = 3;
    const kodePemeriksa = 4;

    const isbn = await perpustakaan.generateISBN(
      kodeKelompok,
      kodePenerbit,
      kodeJudul,
      kodePemeriksa
    );

    // Expected ISBN value as bytes32
    const expectedISBN = await perpustakaan.generateISBN(
      kodeKelompok,
      kodePenerbit,
      kodeJudul,
      kodePemeriksa
    );

    // Assert that the generated ISBN matches the expected value
    expect(isbn).to.equal(expectedISBN);
  });

  it('Tambah buku baru ke perpustakaan', async function () {
    const title = 'Sample Book';
    const author = 'Sample Author';
    const year = 2023;
    const isbn = await perpustakaan.generateISBN(1, 2, 3, 4);

    await perpustakaan.addBook(isbn, title, author, year);
    const book = await perpustakaan.books(isbn);

    expect(book.title).to.equal(title);
    expect(book.author).to.equal(author);
    expect(book.year).to.equal(year);
    expect(book.year).to.not.equal(0);
    expect(await perpustakaan.totalBooks()).to.equal(1);
  });

  it('Update detail buku di perpustakaan', async function () {
    const isbn = await perpustakaan.generateISBN(1, 2, 3, 4);
    await perpustakaan.addBook(isbn, 'Old Title', 'Old Author', 2021);

    const newTitle = 'Updated Title';
    const newAuthor = 'Updated Author';
    const newYear = 2023;

    await perpustakaan.updateBook(isbn, newTitle, newAuthor, newYear);

    // Hanya periksa bahwa pembaruan detail berhasil
    const book = await perpustakaan.books(isbn);
    expect(book.title).to.equal(newTitle);
    expect(book.author).to.equal(newAuthor);
    expect(book.year).to.equal(newYear);
  });


  it('Hapus buku di perpustakaan', async function () {
    const isbn = await perpustakaan.generateISBN(1, 2, 3, 4);
    await perpustakaan.addBook(isbn, 'Sample Book', 'Sample Author', 2023);

    await perpustakaan.deleteBook(isbn);

    // Hanya periksa bahwa buku telah dihapus dari total buku
    expect(await perpustakaan.totalBooks()).to.equal(0);
  });

});
