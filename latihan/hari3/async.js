// async
setTimeout(function () {
  console.log("saya dijalankan belakangan");
}, 3000);

console.log("saya dijalankan pertama");

// callback
function periksaDokter(nomerAntri, callback) {
  if (nomerAntri > 50) {
    callback(false);
  } else if (nomerAntri < 10) {
    callback(true);
  }
}

periksaDokter(65, function (check) {
  if (check) {
    console.log("sebentar lagi giliran saya");
  } else {
    console.log("saya jalan-jalan dulu");
  }
});

function periksaAntrianDokter(nomerAntri, callback) {
  console.log(`sekarang antrian ke-${nomerAntri}`);
  setTimeout(function () {
    if (nomerAntri === 10) {
      console.log("saya masuk ruangan dokter");
      callbak(0);
    } else {
      console.log("saya masih menunggu");
      callback(nomerAntri + 1);
    }
  }, 1000);
}

periksaAntrianDokter(7, function (nomorAntriBaru) {
  periksaAntrianDokter(nomorAntriBaru, function (nomorAntriBaru1) {
    periksaAntrianDokter(nomorAntriBaru1, function (nomorAntriBaru2) {
      periksaAntrianDokter(nomorAntriBaru2, function (nomorAntriBaru3) {
        return nomorAntriBaru3;
      });
    });
  });
});

// callback hell
function execute(nomerAntri) {
  periksaAntrianDokter(nomorAntri, function (nomorAntriBaru) {
    if (nomorAntriBaru !== 0) {
      execute(nomorAntriBaru);
    }
  });
}

execute(7);

// promise
var isMomHappy = false;

var willGetNewPhone = new Promise(function (resolve, reject) {
  if (isMomHappy) {
    var phone = {
      brand: "Samsung",
      color: "black",
    };
    resolve(phone);
  } else {
    var reason = new Error("mom is not happy");
    reject(reason);
  }
});

function askMom() {
  willGetNewPhone
    .then(function (fullfiled) {
      console.log(fullfiled);
    })
    .catch(function (error) {
      console.log(error.message);
    });
}

// contoh promise lainnya
function periksaDataPasien(nomorIdPasien) {
  var dataPasien = [
    { id: 1, nama: "john", jenisKelamin: "Laki-laki" },
    { id: 2, nama: "Michael", jenisKelamin: "Laki-laki" },
    { id: 3, nama: "Sarah", jenisKelamin: "Perempuan" },
    { id: 4, nama: "Frank", jenisKelamin: "Laki-laki" },
  ];
  return new Promise(function (resolve, reject) {
    var pasien = dataPasien.find((x) => x.id === nomorIdPasien);
    if (pasien === undefined) {
      reject("data pasien tidak ada");
    } else {
      resolve(pasien);
    }
  });
}

// promise dengan paramater
periksaDataPasien(5)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
