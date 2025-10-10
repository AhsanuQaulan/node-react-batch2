var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

function bacaBuku(waktu, daftarBuku, index) {
  if (index >= daftarBuku.length) {
    console.log("\nSemua buku telah berhasil dibaca.");
    return;
  }

  const buku = daftarBuku[index];

  readBooksPromise(waktu, buku)
    .then((sisaWaktu) => {
      bacaBuku(sisaWaktu, daftarBuku, index + 1);
    })
    .catch((sisaWaktu) => {
      console.log(`\nProses membaca berhenti karena waktu tidak cukup.`);
    });
}

bacaBuku(10000, books, 0);
