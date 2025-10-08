// soal 1
console.log("SOAL 1");
console.log("LOOPING PERTAMA");

var i = 1;
while (i <= 20) {
  console.log(i + " - I love coding");
  i++;
}
console.log("");

console.log("LOOPING KEDUA");
var i = 20;
while (i >= 1) {
  console.log(i + " - I will become a MERN Stack developer");
  i--;
}
console.log("");

console.log("SOAL 2");

for (var i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " - Angka Genap");
  } else {
    console.log(i + " - Angka Ganjil");
  }
}
console.log("");

console.log("SOAL 3");

for (var i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 2 !== 0) {
    console.log(i + " - I Love Coding");
  } else if (i % 3 === 0 && i % 2 === 0) {
    console.log(i + " - ToT");
  } else if (i % 2 !== 0) {
    console.log(i + " - Santai");
  } else if (i % 2 === 0) {
    console.log(i + " - Berkualitas");
  }
}
console.log("");

console.log("SOAL 4");

var baris = 7;
var pagar = "";

for (var i = 1; i <= baris; i++) {
  pagar += "#";
  console.log(pagar);
}
