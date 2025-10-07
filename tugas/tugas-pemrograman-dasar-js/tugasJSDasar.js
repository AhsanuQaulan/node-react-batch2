// soal 1
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
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var angka = "0123456789"

var password1 = abjad[19] + abjad[4] + abjad[18] + abjad[19] + angka[1] + angka[2] + angka[3];
var password2 = abjad[1] + angka[3] + abjad[1] + angka[3] + abjad[10];
var password3 = abjad[17] + angka[4] + abjad[7] + angka[4] + angka[5] + angka[1] + angka[4];

console.log("password ke satu: " + password1);
console.log("password ke dua: " + password2);
console.log("password ke tiga: " + password3);
console.log("");

// soal 3
var sentence2 = "wow JavaScript is so cool";

var exampleFirstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 17);
var fourthWord2 = sentence2.substring(18, 20);
var fifthWord2 = sentence2.substring(21, 25);

console.log('First Word: ' + exampleFirstWord2);
console.log('Second Word: ' + secondWord2);
console.log('Third Word: ' + thirdWord2);
console.log('Fourth Word: ' + fourthWord2);
console.log('Fifth Word: ' + fifthWord2);
console.log("");

// soal 4
var sentence3 = "wow JavaScript is so cool";

var exampleFirstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence3.substring(4, 14);
var thirdWord3 = sentence3.substring(15, 17);
var fourthWord3 = sentence3.substring(18, 20);
var fifthWord3 = sentence3.substring(21, 25);

var firstWordLength = exampleFirstWord3.length;
var secondWordLength = exampleSecondWord3.length;
var thirdWordLength = exampleSecondWord3.length;
var fourthWordLength = exampleSecondWord3.length;
var fifthWordLength = exampleSecondWord3.length;

console.log('First Word: ' + exampleFirstWord3 + 'with length' + firstWordLength);
console.log('Second Word: ' + exampleFirstWord3 + 'with length' + firstWordLength);
console.log('Third Word: ' + exampleFirstWord3 + 'with length' + firstWordLength);
console.log('Fourth Word: ' + exampleFirstWord3 + 'with length' + firstWordLength);
console.log('Fifth Word: ' + exampleFirstWord3 + 'with length' + firstWordLength);