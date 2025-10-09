// SOAL 1
console.log("SOAL 1");

const hitungBangunDatar = (namaBangun, sisi, hitung) => {
  const hasil = hitung(sisi);
  console.log(`--- ${namaBangun.toUpperCase()} ---`);
  console.log(`Sisinya adalah ${sisi}`);
  console.log(`Hasilnya adalah ${hasil}`);
  console.log(`------------------`);
};

const kalkulasi = {
  luasPersegi: (sisi) => sisi * sisi,
  kelilingPersegi: (sisi) => 4 * sisi,
  luasPersegiPanjang: (dimensi) => dimensi.panjang * dimensi.lebar,
  kelilingPersegiPanjang: (dimensi) => 2 * (dimensi.panjang + dimensi.lebar),
};

const hitungPersegi = (sisi) => {
  hitungBangunDatar("Luas Persegi", sisi, kalkulasi.luasPersegi);
  hitungBangunDatar("Keliling Persegi", sisi, kalkulasi.kelilingPersegi);
};

const HitungPersegiPanjang = (panjang, lebar) => {
  const dimensi = { panjang, lebar };
  hitungBangunDatar("Luas Persegi Panjang", `${panjang} & ${lebar}`, () => kalkulasi.luasPersegiPanjang(dimensi));
  hitungBangunDatar("Keliling Persegi Panjang", `${panjang} & ${lebar}`, () => kalkulasi.kelilingPersegiPanjang(dimensi));
};

hitungPersegi(8);
HitungPersegiPanjang(12, 7);

// SOAL 2
console.log();
console.log("SOAL 2");

const kalkulasiRuang = {
  kubus: {
    volume: (sisi) => sisi ** 3,
    luasPermukaan: (sisi) => 6 * sisi ** 2,
  },
  balok: {
    volume: (p, l, t) => p * l * t,
    luasPermukaan: (p, l, t) => 2 * (p * l + p * t + l * t),
  },
};

const tampilkanHasilRuang = (namaOperasi, dimensi, fungsiKalkulasi) => {
  const hasil = fungsiKalkulasi(); // Menjalankan fungsi yang dikirim
  console.log(`--- ${namaOperasi.toUpperCase()} ---`);

  if (dimensi.panjang !== undefined) {
    console.log(`Panjang: ${dimensi.panjang}, Lebar: ${dimensi.lebar}, Tinggi: ${dimensi.tinggi}`);
  } else {
    console.log(`Sisi: ${dimensi.sisi}`);
  }

  console.log(`Hasilnya adalah ${hasil}`);
  console.log(`------------------`);
};

const hitungKubus = (sisi) => {
  tampilkanHasilRuang("Volume Kubus", { sisi }, () => kalkulasiRuang.kubus.volume(sisi));
  tampilkanHasilRuang("Luas Permukaan Kubus", { sisi }, () => kalkulasiRuang.kubus.luasPermukaan(sisi));
};

const HitungBalok = (panjang, lebar, tinggi) => {
  const dimensi = { panjang, lebar, tinggi };
  tampilkanHasilRuang("Volume Balok", dimensi, () => kalkulasiRuang.balok.volume(panjang, lebar, tinggi));
  tampilkanHasilRuang("Luas Permukaan Balok", dimensi, () => kalkulasiRuang.balok.luasPermukaan(panjang, lebar, tinggi));
};

hitungKubus(8);
HitungBalok(12, 7, 5);

// SOAL 3
console.log();
console.log("SOAL 3");

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

function tampilkanNamaRecursive(arr, index = 0) {
  if (index >= arr.length) {
    return;
  }

  console.log(index + 1 + ". " + arr[index].name);

  tampilkanNamaRecursive(arr, index + 1);
}

tampilkanNamaRecursive(people);

// SOAL 4
console.log();
console.log("SOAL 4");

var phones = [
  { name: "Samsung Galaxy A52", brand: "Samsung", year: 2021, colors: ["black", "white"] },
  { name: "Redmi Note 10 Pro", brand: "Xiaomi", year: 2021, colors: ["white", "blue"] },
  { name: "Redmi Note 9 Pro", brand: "Xiaomi", year: 2020, colors: ["white", "blue", "black"] },
  { name: "Iphone 12", brand: "Apple", year: 2020, colors: ["silver", "gold"] },
  { name: "Iphone 11", brand: "Apple", year: 2019, colors: ["gold", "black", "silver"] },
];

const phonesWithBlackColor = phones.filter((phone) => phone.colors.includes("black"));

const sortedPhones = phonesWithBlackColor.sort((a, b) => a.year - b.year);

function displayPhonesRecursive(arr, index = 0) {
  if (index >= arr.length) {
    return;
  }

  const phone = arr[index];

  console.log(`${index + 1}. ${phone.name}, colors available : ${phone.colors.join(", ")}`);

  displayPhonesRecursive(arr, index + 1);
}

displayPhonesRecursive(sortedPhones);
