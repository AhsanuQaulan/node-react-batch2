// recursive function
function countDown(number) {
  console.log(number);

  var newNumber = number - 1;

  if (newNumber > 0) {
    countDown(newNumber);
  }
}

countDown(4);

// first-class function
console.log();
function HitungLingkaran(radius) {
  var pi = 22 / 7;

  function luas(r) {
    return pi * r * r;
  }
  function keliling(r) {
    return 2 * pi * r;
  }
  console.log("luas:", luas(radius));
  console.log("keliling:", keliling(radius));
}

HitungLingkaran(7);

// currying function
console.log();
function tambah(a) {
  return function (b) {
    return a + b;
  };
}

console.log(tambah(2)(5));

// imperative pattern
console.log();
function hitungBilanganGenap(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

var angka = [1, 2, 3, 4, 5, 6];
var jumlahGenap = hitungBilanganGenap(angka);
console.log(jumlahGenap);

// declarative pattern
console.log();
var angka = [1, 2, 3, 4, 5, 6];
var jumlahGenap = angka.filter(function (x) {
  return x % 2 === 0;
}).length;
console.log(jumlahGenap);
