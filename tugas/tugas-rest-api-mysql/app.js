// app.js
const express = require("express");
require("dotenv").config();

const mahasiswaRoutes = require("./routes/mahasiswaRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk membaca JSON body dari request
app.use(express.json());

// Rute utama aplikasi
app.get("/", (req, res) => {
  res.send("Selamat Datang di API Nilai Mahasiswa!");
});

// Menggunakan rute yang sudah didefinisikan untuk endpoint /api/nilai
app.use("/nilai", mahasiswaRoutes);

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
