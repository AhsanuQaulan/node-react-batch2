// Import library express
const express = require("express");

// Buat instance aplikasi express
const app = express();
const PORT = 3000;

// Buat route GET sesuai permintaan soal
app.get("/data-orang/:id", (req, res) => {
  // Data sumber
  const dataOrang = [
    { id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L" },
    { id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L" },
    { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P" },
    { id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L" },
    { id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P" },
  ];

  // 1. Ambil ID dari parameter URL
  const idCari = parseInt(req.params.id);

  // 2. Cari data orang yang cocok berdasarkan ID
  const orangDitemukan = dataOrang.find((orang) => orang.id === idCari);

  // 3. Cek apakah data ditemukan atau tidak
  if (orangDitemukan) {
    // Jika data ditemukan
    let panggilan = "";
    if (orangDitemukan.jenisKelamin === "L") {
      panggilan = "Pak";
    } else {
      panggilan = "Bu";
    }

    const outputText = `${panggilan} ${orangDitemukan.name} adalah seorang ${orangDitemukan.pekerjaan} yang berusia ${orangDitemukan.umur} tahun`;
    res.send(outputText);
  } else {
    // Jika data tidak ditemukan
    res.status(404).send("Maaf data tidak ditemukan");
  }
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
  console.log(`- Contoh data ditemukan: http://localhost:${PORT}/data-orang/1`);
  console.log(`- Contoh data tidak ditemukan: http://localhost:${PORT}/data-orang/99`);
});
