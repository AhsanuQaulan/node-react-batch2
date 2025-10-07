// soal 1
<<<<<<< HEAD
console.log("Soal 1");

=======
>>>>>>> 74f956b270444253e2d5f4a187636c5b273c6df0
var perkenalan = "Nama saya adalah ";
var nama = "Ahsan. ";

var kata1 = "saya ";
var kata2 = "berharap ";
var kata3 = "untuk ";
var kata4 = "menjadi ";
var kata5 = "seorang ";
var kata6 = "software ";
var kata7 = "engineer ";

console.log(perkenalan.concat(nama, kata1, kata2, kata3, kata4, kata5, kata6, kata7));
console.log("");

// soal 2
<<<<<<< HEAD
console.log("Soal 2");

var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var angka = "0123456789";
=======
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var angka = "0123456789"
>>>>>>> 74f956b270444253e2d5f4a187636c5b273c6df0

var password1 = abjad[19] + abjad[4] + abjad[18] + abjad[19] + angka[1] + angka[2] + angka[3];
var password2 = abjad[1] + angka[3] + abjad[1] + angka[3] + abjad[10];
var password3 = abjad[17] + angka[4] + abjad[7] + angka[4] + angka[5] + angka[1] + angka[4];

console.log("password ke satu: " + password1);
console.log("password ke dua: " + password2);
console.log("password ke tiga: " + password3);
console.log("");

// soal 3
<<<<<<< HEAD
console.log("Soal 3");

=======
>>>>>>> 74f956b270444253e2d5f4a187636c5b273c6df0
var sentence2 = "wow JavaScript is so cool";

var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 17);
var fourthWord2 = sentence2.substring(18, 20);
var fifthWord2 = sentence2.substring(21, 25);

<<<<<<< HEAD
console.log("First Word: " + exampleFirstWord2);
console.log("Second Word: " + secondWord2);
console.log("Third Word: " + thirdWord2);
console.log("Fourth Word: " + fourthWord2);
console.log("Fifth Word: " + fifthWord2);
console.log("");

// soal 4
console.log("Soal 4");

=======
console.log('First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);
console.log("");

// soal 4
>>>>>>> 74f956b270444253e2d5f4a187636c5b273c6df0
var sentence3 = "wow JavaScript is so cool";

var exampleFirstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence3.substring(4, 14);
var thirdWord3 = sentence3.substring(15, 17);
var fourthWord3 = sentence3.substring(18, 20);
var fifthWord3 = sentence3.substring(21, 25);

var firstWordLength = exampleFirstWord3.length;
<<<<<<< HEAD
var secondWordLength = secondWord3.length;
var thirdWordLength = thirdWord3.length;
var fourthWordLength = fourthWord3.length;
var fifthWordLength = fifthWord3.length;

console.log("First Word: " + exampleFirstWord3 + ", with length: " + firstWordLength);
console.log("Second Word: " + secondWord3 + ", with length: " + secondWordLength);
console.log("Third Word: " + thirdWord3 + ", with length: " + thirdWordLength);
console.log("Fourth Word: " + fourthWord3 + ", with length: " + fourthWordLength);
console.log("Fifth Word: " + fifthWord3 + ", with length: " + fifthWordLength);
console.log("");

// soal 5
console.log("Soal 5");

var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var kode1 = abjad.indexOf("H") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("O");
var kode2 = abjad.indexOf("W") + "-" + abjad.indexOf("O") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("L") + "-" + abjad.indexOf("D");
var kode3 = abjad.indexOf("I") + "-" + abjad.indexOf("M") + "-" + abjad.indexOf("R") + "-" + abjad.indexOf("E") + "-" + abjad.indexOf("A") + "-" + abjad.indexOf("D") + "-" + abjad.indexOf("Y");

console.log("kode 1: " + kode1);
console.log("kode 2: " + kode2);
console.log("kode 3: " + kode3);
console.log("");

// soal 6
console.log("Soal 6");

var pertama = "saya";
var kedua = "senang";
var ketiga = "belajar";
var keempat = "javascript";

var hasilPertama = pertama.replace("s", "S");
var hasilKedua = kedua.charAt(0).toUpperCase() + kedua.slice(1, -1) + kedua.slice(-1).toUpperCase();
var hasilKetiga = ketiga.charAt(0).toUpperCase() + ketiga.slice(1, -1) + ketiga.slice(-1).toUpperCase();
var hasilKeempat = keempat.toUpperCase();

var hasilAkhir = hasilPertama + " " + hasilKedua + " " + hasilKetiga + " " + hasilKeempat;

console.log(hasilAkhir);
console.log("");

// soal 7
console.log("Soal 7");

var panjang = "12";
var lebar = "7";
var alas = "6";
var tinggi = "13";

var strInt = parseInt(panjang);
var strInt = parseInt(lebar);
var strInt = parseInt(alas);
var strInt = parseInt(tinggi);

var luasPersegiPanjang = panjang * lebar;
var luasSegitiga = 0.5 * alas * tinggi;

console.log("Panjang: " + panjang);
console.log("Lebar: " + lebar);
console.log("Alas: " + alas);
console.log("Tinggi: " + tinggi);

console.log("Luas persegi panjang adalah: " + luasPersegiPanjang);
console.log("Luas segitiga adalah: " + luasSegitiga);
console.log("");

// soal 8
console.log("Soal 8 ");

var sisi = " 1 2 ";
var jariJari = "7.5";

var sisiAngka = Number(sisi.replace(/ /g, ""));
var jariJariAngka = parseFloat(jariJari);

var luasPersegi = sisiAngka * sisiAngka;
var luasLingkaran = 3.14 * jariJariAngka * jariJariAngka;

console.log("Sisi: " + sisiAngka);
console.log("Jari-jari: " + jariJariAngka);

console.log("Luas persegi adalah: " + luasPersegi);
console.log("Luas lingkaran adalah: " + luasLingkaran);

console.log("");
=======
var secondWordLength = exampleSecondWord3.length;
var thirdWordLength = exampleSecondWord3.length;
var fourthWordLength = exampleSecondWord3.length;
var fifthWordLength = exampleSecondWord3.length;

console.log('First Word: ' + exampleFirstWord3 + 'with length' + firstWordLength);
console.log('Second Word: ' + exampleFirstWord3 + 'with length' + firstWordLength);
console.log('Third Word: ' + exampleFirstWord3 + 'with length' + firstWordLength);
console.log('Fourth Word: ' + exampleFirstWord3 + 'with length' + firstWordLength);
console.log('Fifth Word: ' + exampleFirstWord3 + 'with length' + firstWordLength);
>>>>>>> 74f956b270444253e2d5f4a187636c5b273c6df0
