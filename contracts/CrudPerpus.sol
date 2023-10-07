// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Perpustakaan {
    struct BookDetail {
        string title;
        string author;
        uint256 year;
    }

    mapping(bytes32 => BookDetail) public books; // Mapping untuk menyimpan buku berdasarkan ISBN
    uint256 public totalBooks; // Jumlah total buku dalam perpustakaan
    address public admin; // Alamat administrator kontrak

    constructor() {
        admin = msg.sender; // Konstruktor untuk menginisialisasi administrator
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Hanya admin yang dapat memanggil fungsi ini");
        _;
    }

    // Fungsi untuk menghasilkan ISBN berdasarkan parameter yang diberikan
    function generateISBN(
        uint256 kodeKelompok,
        uint256 kodePenerbit,
        uint256 kodeJudul,
        uint256 kodePemeriksa
    ) public pure returns (bytes32) {
        // Format ISBN 13-digit: Group-Publisher-TitleCode-BookNumber
        bytes32 isbn = keccak256(abi.encodePacked(kodeKelompok, kodePenerbit, kodeJudul, kodePemeriksa));
        return isbn;
    }

    // Fungsi untuk menambahkan buku baru ke dalam perpustakaan
    function addBook(
        bytes32 isbn,
        string memory title,
        string memory author,
        uint256 year
    ) public onlyAdmin {
        require(books[isbn].year == 0, "Buku dengan ISBN ini sudah ada");
        BookDetail memory newBook = BookDetail(title, author, year);
        books[isbn] = newBook;
        totalBooks++;
    }

    // Fungsi untuk memperbarui detail buku berdasarkan ISBN
    function updateBook(
        bytes32 isbn,
        string memory newTitle,
        string memory newAuthor,
        uint256 newYear
    ) public onlyAdmin {
        require(books[isbn].year != 0, "Buku dengan ISBN ini tidak ditemukan");
        books[isbn].title = newTitle;
        books[isbn].author = newAuthor;
        books[isbn].year = newYear;
    }

    // Fungsi untuk menghapus buku dari perpustakaan berdasarkan ISBN
    function deleteBook(bytes32 isbn) public onlyAdmin {
        require(books[isbn].year != 0, "Buku dengan ISBN ini tidak ditemukan");
        delete books[isbn];
        totalBooks--;
    }
}
