var filterBooksPromise = require("./promise2.js");

// Kondisi 1: bukunya berwarna dan jumlah halamannya 50
filterBooksPromise(true, 50)
  .then(function (filteredBooks) {
    console.log(filteredBooks);
  })
  .catch(function (error) {
    console.log(error.message);
  });

// Fungsi async untuk menjalankan kondisi 2 dan 3
async function jalankanFilterLanjutan() {
  // Kondisi 2: bukunya tidak berwarna dan jumlah halamannya 250
  try {
    const filteredBooks2 = await filterBooksPromise(false, 250);
    console.log(filteredBooks2);
  } catch (error) {
    console.log(error.message);
  }

  // Kondisi 3: bukunya berwarna dan jumlah halamannya 30
  try {
    const filteredBooks3 = await filterBooksPromise(true, 30);
    console.log(filteredBooks3);
  } catch (error) {
    console.log(error.message);
  }
}

jalankanFilterLanjutan();
