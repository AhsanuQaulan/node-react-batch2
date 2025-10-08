// if
if (true) {
  console.log("jalankan code");
}
console.log("");

if (false) {
  console.log("code tidak dijalankan");
}
// if else
var mood = "happy";
if (mood == "happy") {
  console.log("aku sangat bahagia");
} else {
  console.log("aku sedang sedih");
}
console.log("");

//if else dan if, else if
const angka1 = 2;
const angka2 = 5;

if (angka1 > angka2) {
  console.log(angka1 + " lebih besar dari " + angka2);
} else if (angka1 < angka2) {
  console.log(angka1 + " lebih kecil dari " + angka2);
} else {
  console.log(angka1 + " sama dengan " + angka2);
}
console.log("");

// nested if
var minimarketStatus = "open";
var telur = "soldout";
var buah = "ready";

if (minimarketStatus == "open") {
  console.log("saya akan membeli telur dan buah");
  if (telur == "soldout" && buah == "soldout") {
    console.log("barang yang dijual habis");
  } else if (telur == "soldout") {
    console.log("telur habis, tapi buah ready");
    console.log("belanjaan saya tidak lengkap");
  } else if (buah == "soldout") {
    console.log("buah habis, tapi telur ready");
    console.log("belanjaan saya tidak lengkap");
  } else {
    console.log("belanjaan saya lengkap");
  }
} else {
  console.log("mninimarket tutup, saya balik lagi");
}
console.log("");

// switch case
var buttonPushed = 1;
switch (buttonPushed) {
  case 1: {
    console.log("matikan TV");
    break;
  }
  case 2: {
    console.log("turunkan volume TV");
    break;
  }
  case 3: {
    console.log("tingkatkan volume TV");
    break;
  }
  case 4: {
    console.log("matikan suara TV");
    break;
  }
  default: {
    console.log("Tidak terjad apa-apa");
  }
}
console.log("");

// ternary operator
var age = 17;
var punyaKTP = age >= 17 ? "boleh punya KTP" : "belum boleh punya KTP";
console.log(punyaKTP);
console.log("");

var angka = 9;
var jenisBilangan = angka % 2 === 0 ? "Bilangan Genap" : "Bukan Bilangan Genap";
console.log(jenisBilangan);
