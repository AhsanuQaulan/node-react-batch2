// function tanpa return
console.log("function tanpa return");
function tampilkan() {
  console.log("halo");
}

tampilkan();
console.log("");

// function dengan return
console.log("function dengan return");
function munculkanAngkaDua() {
  return 2;
}

var tampung = munculkanAngkaDua();
console.log(tampung);
console.log("");

// function dengan parameter
console.log("function dengan parameter");
function kalikanDua(angka) {
  return angka * 2;
}

var tampung = kalikanDua(2);
console.log(tampung);
console.log("");

// parameter lebih dari satu
console.log("paramater lebih dari satu");
function tampilkanAngka(angkaPertama, angkaKedua = 2) {
  return angkaPertama + angkaKedua;
}

console.log(tampilkanAngka(5, 3));
console.log(tampilkanAngka(6));

// anonymous function
console.log("anonymous function");
var fungsiPerkalian = function (angkaPertama, angkaKedua) {
  return angkaPertama * angkaKedua;
};

console.log(fungsiPerkalian(2, 5));
