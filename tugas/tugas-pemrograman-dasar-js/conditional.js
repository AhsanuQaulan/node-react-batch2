// soal 1
console.log("SOAL 1");

var sentence = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript";
console.log("Panjang string: " + sentence.length);

if (sentence < 10) {
  console.log("String tergolong pendek");
} else if (sentence > 10 && sentence < 30) {
  console.log("String tergolong sedang");
} else {
  console.log("String tergolong panjang");
}
console.log("");

// soal 2
console.log("SOAL 2");

var nilai = 75;

if (nilai >= 80) {
  console.log("Nilai Anda " + nilai);
  console.log("Indeks A");
} else if (nilai >= 70 && nilai < 80) {
  console.log("Nilai Anda " + nilai);
  console.log("Indeks B");
} else if (nilai >= 60 && nilai < 70) {
  console.log("Nilai Anda " + nilai);
  console.log("Indeks C");
} else if (nilai >= 50 && nilai < 60) {
  console.log("Nilai Anda " + nilai);
  console.log("Indeks D");
} else {
  console.log("Nilai Anda " + nilai);
  console.log("E");
}
console.log("");

// soal 3
console.log("SOAL 3");
var tanggal = 12;
var bulan = 8;
var tahun = 2003;

var namaBulan;

switch (bulan) {
  case 1:
    namaBulan = "Januari";
    break;
  case 2:
    namaBulan = "Februari";
    break;
  case 3:
    namaBulan = "Maret";
    break;
  case 4:
    namaBulan = "April";
    break;
  case 5:
    namaBulan = "Mei";
    break;
  case 6:
    namaBulan = "Juni";
    break;
  case 7:
    namaBulan = "Juli";
    break;
  case 8:
    namaBulan = "Agustus";
    break;
  case 9:
    namaBulan = "September";
    break;
  case 10:
    namaBulan = "Oktober";
    break;
  case 11:
    namaBulan = "November";
    break;
  case 12:
    namaBulan = "Desember";
    break;
  default:
    namaBulan = "(Bulan tidak valid)";
    break;
}

var hasil = tanggal + " " + namaBulan + " " + tahun;
console.log(hasil);
