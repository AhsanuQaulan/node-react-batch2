// soal 1
console.log("SOAL 1");

function introduce(nama, jenisKelamin, pekerjaan, umur) {
  var panggilan = "";

  if (jenisKelamin === "laki-laki") {
    panggilan = "Pak";
  } else {
    panggilan = "Bu";
  }

  return `${panggilan} ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`;
}

var john = introduce("John", "laki-laki", "penulis", "30");
console.log(john);

var sarah = introduce("Sarah", "perempuan", "model", "28");
console.log(sarah);

// soal 2
console.log("");
console.log("SOAL 2");

function findNonRepeatingChars(text) {
  // Ubah ke huruf kecil dan hapus semua spasi
  const cleanText = text.toLowerCase().replace(/ /g, "");

  return cleanText
    .split("") // 1. Ubah string menjadi array: ['s', 'u', 'p', ...]
    .filter((char) => cleanText.indexOf(char) === cleanText.lastIndexOf(char)) // 2. Saring hanya karakter yang posisi pertama dan terakhirnya sama
    .join(""); // 3. Gabungkan kembali array menjadi string
}

var text = "Super Bootcamp Fullstack Dev 2022";
var uniqueChars = findNonRepeatingChars(text);

console.log(uniqueChars);

// soal 3
console.log("");
console.log("SOAL 3");

function cariMinMax(arr) {
  if (arr.length === 0) {
    return "Array kosong";
  }

  var angkaTerkecil = arr[0];
  var angkaTerbesar = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > angkaTerbesar) {
      angkaTerbesar = arr[i];
    }
    if (arr[i] < angkaTerkecil) {
      angkaTerkecil = arr[i];
    }
  }

  return `angka terbesar adalah ${angkaTerbesar} dan angka terkecil adalah ${angkaTerkecil}`;
}

var angka = [2, 3, 1, 9, 12, 8, 9, 7];
console.log(cariMinMax(angka));

// soal 4
console.log("");
console.log("SOAL 4");

function arrangeString(str) {
  return str.split("").sort().join("");
}

console.log(arrangeString("bahasa"));
console.log(arrangeString("similikiti"));
console.log(arrangeString("sanbercode"));
console.log(arrangeString(""));

// soal 5
console.log("SOAL 5");

function palindrome(kata) {
  var kataTerbalik = kata.split("").reverse().join("");

  return kata === kataTerbalik;
}

console.log(palindrome("katak"));
console.log(palindrome("blanket"));
console.log(palindrome("nababan"));
console.log(palindrome("haji ijah"));
console.log(palindrome("mister"));

// soal 6
console.log("");
console.log("SOAL 6");

function angkaPalindrome(num) {
  while (true) {
    num++;

    var numStr = String(num);

    var reversedStr = numStr.split("").reverse().join("");

    if (numStr === reversedStr) {
      return num;
    }
  }
}

console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10));
console.log(angkaPalindrome(117));
console.log(angkaPalindrome(175));
console.log(angkaPalindrome(1000));

// soal 7
console.log("");
console.log("SOAL 7");

function cekPermutasi(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  var sortedStr1 = str1.split("").sort().join("");
  var sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

console.log(cekPermutasi("abah", "baha"));
console.log(cekPermutasi("ondel", "delon"));
console.log(cekPermutasi("paul sernine", "arsene lupin"));
console.log(cekPermutasi("taco", "taca"));
