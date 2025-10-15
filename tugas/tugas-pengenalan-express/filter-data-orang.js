// Import library express
const express = require("express");

// Buat instance aplikasi express
const app = express();
const PORT = 3000;

// Buat route GET sesuai permintaan soal
app.get("/data-orang", (req, res) => {
  // Data sumber
  const dataOrang = [
    { id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L" },
    { id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L" },
    { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P" },
    { id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L" },
    { id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P" },
  ];

  // 1. Ambil parameter dari query URL (?umur=...&gender=...)
  const { umur, gender } = req.query;

  let filteredData = dataOrang;

  // 2. Filter berdasarkan umur jika parameter 'umur' ada
  if (umur) {
    // parseInt() digunakan untuk mengubah string dari URL menjadi angka
    filteredData = filteredData.filter((orang) => orang.umur >= parseInt(umur));
  }

  // 3. Filter berdasarkan gender jika parameter 'gender' ada
  if (gender) {
    // .toLowerCase() agar tidak case-sensitive (L atau l akan sama)
    filteredData = filteredData.filter((orang) => orang.jenisKelamin.toLowerCase() === gender.toLowerCase());
  }

  // 4. Format data yang sudah difilter menjadi string
  const formattedOutput = filteredData.map((orang, index) => {
    return `${index + 1}. ${orang.name} - Pekerjaan: ${orang.pekerjaan} - Umur: ${orang.umur} Tahun`;
  });

  // 5. Kirim hasilnya sebagai teks
  // .join('\n') untuk membuat baris baru untuk setiap orang
  res.type("text/plain").send(formattedOutput.join("\n"));
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
  console.log(`Contoh penggunaan:`);
  console.log(`- Filter umur >= 30 & gender L: http://localhost:${PORT}/data-orang?umur=30&gender=L`);
  console.log(`- Filter gender P: http://localhost:${PORT}/data-orang?gender=P`);
  console.log(`- Tanpa filter: http://localhost:${PORT}/data-orang`);
});
