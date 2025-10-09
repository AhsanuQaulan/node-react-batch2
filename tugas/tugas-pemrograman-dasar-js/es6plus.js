// SOAL 1
console.log("SOAL 1");

const pi = 22 / 7;

const hitungLuasLingkaran = (radius) => {
  return pi * radius ** 2;
};

const hitungKelilingLingkaran = (radius) => {
  return 2 * pi * radius;
};

let radius = 10;

const luas = hitungLuasLingkaran(radius);
const keliling = hitungKelilingLingkaran(radius);

console.log(`Lingkaran dengan jari-jari ${radius}`);
console.log(`- Luasnya adalah: ${luas.toFixed(2)}`);
console.log(`- Kelilingnya adalah: ${keliling.toFixed(2)}`);

// SOAL 2
console.log();
console.log("SOAL 2");

const introduce = (...args) => {
  const [nama, umur, jenisKelamin, pekerjaan] = args;
  let panggilan = "";

  if (jenisKelamin.toLowerCase() === "laki-laki") {
    panggilan = "pak";
  } else {
    panggilan = "bu";
  }

  return `${panggilan} ${nama} adalah seorang ${pekerjaan} yang berusia ${umur} tahun`;
};

const perkenalanJohn = introduce("john", "30", "Laki-Laki", "penulis");
console.log(perkenalanJohn);

const perkenalanSarah = introduce("sarah", "28", "Perempuan", "guru");
console.log(perkenalanSarah);

// SOAL 3
console.log();
console.log("SOAL 3");

const newFunction = function literal(firstName, lastName) {
  return {
    firstName,
    lastName,
    fullName() {
      console.log(`${firstName} ${lastName}`);
    },
  };
};

console.log(newFunction("John", "Doe").firstName);
console.log(newFunction("Richard", "Roe").lastName);
newFunction("William", "Imoh").fullName();

// SOAL 4
console.log();
console.log("SOAL 4");

let phone = {
  name: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020,
  colors: ["Mystic Bronze", "Mystic White", "Mystic Black"],
};

const {
  brand: phoneBrand,
  name: phoneName,
  year,
  colors: [colorBronze, , colorBlack],
} = phone;

console.log(phoneBrand, phoneName, year, colorBlack, colorBronze);

// SOAL 5
console.log();
console.log("SOAL 5");

let warna = ["biru", "merah", "kuning", "hijau"];

let dataBukuTambahan = {
  penulis: "john doe",
  tahunTerbit: 2020,
};

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172,
  warnaSampul: ["hitam"],
};

buku = {
  ...buku,
  ...dataBukuTambahan,
  warnaSampul: [...buku.warnaSampul, ...warna],
};

console.log(buku);

// SOAL 6
console.log();
console.log("SOAL 6");

const addProducts = (brandObject, newProductsArray) => {
  return {
    ...brandObject,
    products: [...brandObject.products, ...newProductsArray],
  };
};

let samsung = {
  name: "Samsung",
  products: [
    { name: "Samsung Galaxy Note 10", colors: ["black", "gold", "silver"] },
    { name: "Samsung Galaxy Note 10s", colors: ["blue", "silver"] },
    { name: "Samsung Galaxy Note 20s", colors: ["white", "black"] },
  ],
};

let newProducts = [
  { name: "Samsung Galaxy A52", colors: ["white", "black"] },
  { name: "Samsung Galaxy M52", colors: ["blue", "grey", "white"] },
];

samsung = addProducts(samsung, newProducts);

console.log(samsung);

// SOAL 7
console.log();
console.log("SOAL 7");

const createProfile = (dataArray) => {
  const [nama, domisili, umur] = dataArray;

  return {
    nama,
    domisili,
    umur,
  };
};

let data = ["Bondra", "Medan", 25];
let profile = createProfile(data);

console.log(profile);

// SOAL 8
console.log();
console.log("SOAL 8");

const graduate = (...studentArrays) => {
  const allStudents = [].concat(...studentArrays);

  return allStudents.reduce((groups, student) => {
    const { name, class: className } = student;

    groups[className] = groups[className] ? [...groups[className], name] : [name];

    return groups;
  }, {});
};

const data1 = [
  { name: "Ahmad", class: "adonis" },
  { name: "Regi", class: "laravel" },
  { name: "Bondra", class: "adonis" },
  { name: "Iqbal", class: "vuejs" },
  { name: "Putri", class: "laravel" },
];

const data2 = [
  { name: "Yogi", class: "react" },
  { name: "Fikri", class: "agile" },
  { name: "Arief", class: "agile" },
];

console.log(graduate(data1));
console.log(graduate(data2));
