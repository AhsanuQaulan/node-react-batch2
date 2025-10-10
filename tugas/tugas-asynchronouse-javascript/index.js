var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "Komik", timeSpent: 1000 },
];

// di index.js
var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 1000 },
];

function bacaBuku(waktu, indeksBuku) {
  if (indeksBuku < books.length) {
    readBooks(waktu, books[indeksBuku], function (sisaWaktu) {
      if (sisaWaktu > 0) {
        bacaBuku(sisaWaktu, indeksBuku + 1);
      }
    });
  } else {
    console.log("Semua buku telah selesai dibaca.");
  }
}

bacaBuku(10000, 0);
