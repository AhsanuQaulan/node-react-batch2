// soal 1
console.log("SOAL 1");

var buahBuahan = [
  {
    nama: "Nanas",
    warna: "Kuning",
    adaBijinya: false,
    harga: 9000,
  },
  {
    nama: "Jeruk",
    warna: "Oranye",
    adaBijinya: true,
    harga: 8000,
  },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    adaBijinya: true,
    harga: 10000,
  },
  {
    nama: "Pisang",
    warna: "Kuning",
    adaBijinya: false,
    harga: 5000,
  },
];

var buahTanpaBiji = buahBuahan.filter(function (buah) {
  return buah.adaBijinya === false;
});

console.log(buahTanpaBiji);

// soal 2
console.log("");
console.log("SOAL 2");

function tambahDataFilm(nama, durasi, genre, tahun) {
  var filmBaru = {
    nama: nama,
    durasi: durasi,
    genre: genre,
    tahun: tahun,
  };
  dataFilm.push(filmBaru);
}

var dataFilm = [];

tambahDataFilm("LOTR", "2 jam", "action", "1999");
tambahDataFilm("avenger", "2 jam", "action", "2019");
tambahDataFilm("spiderman", "2 jam", "action", "2004");
tambahDataFilm("juon", "2 jam", "horror", "2004");

console.log(dataFilm);

// soal 3
console.log("");
console.log("SOAL 3");

var people = [
  { name: "John", job: "Programmer", gender: "male", age: 30 },
  { name: "Sarah", job: "Model", gender: "female", age: 27 },
  { name: "Jack", job: "Engineer", gender: "male", age: 25 },
  { name: "Ellie", job: "Designer", gender: "female", age: 35 },
  { name: "Danny", job: "Footballer", gender: "male", age: 30 },
];

var filteredPeople = people.filter(function (person) {
  return person.gender === "male" && person.age > 29;
});

console.log(filteredPeople);

// soal 4
console.log("");
console.log("SOAL 4");

var people = [
  { name: "John", job: "Programmer", gender: "male", age: 30 },
  { name: "Sarah", job: "Model", gender: "female", age: 27 },
  { name: "Jack", job: "Engineer", gender: "male", age: 25 },
  { name: "Ellie", job: "Designer", gender: "female", age: 35 },
  { name: "Danny", job: "Footballer", gender: "male", age: 30 },
];

var totalAge = 0;

for (var i = 0; i < people.length; i++) {
  totalAge += people[i].age;
}

var averageAge = totalAge / people.length;

console.log(averageAge);

// soal 5
console.log("");
console.log("SOAL 5");

var people = [
  { name: "John", job: "Programmer", gender: "male", age: 30 },
  { name: "Sarah", job: "Model", gender: "female", age: 27 },
  { name: "Jack", job: "Engineer", gender: "male", age: 25 },
  { name: "Ellie", job: "Designer", gender: "female", age: 35 },
  { name: "Danny", job: "Footballer", gender: "male", age: 30 },
];

people.sort(function (a, b) {
  return a.age - b.age;
});

for (var i = 0; i < people.length; i++) {
  console.log(i + 1 + ". " + people[i].name);
}

// soal 6
console.log("");
console.log("SOAL 6");

var phone = {
  name: "Samsung Galaxy Note 20",
  brand: "Samsung",
  colors: ["Black"],
  release: 2020,
};

function addColors(newColor) {
  phone.colors.push(newColor);
}

addColors("Gold");
addColors("Silver");
addColors("Brown");
console.log(phone);
