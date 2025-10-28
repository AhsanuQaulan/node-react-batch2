// impor library express
const express = require("express");

// membuat instance dari aplikasi express
const app = express();
const port = 3000;

// DEFINISI ROUTE

// route untuk halaman utama
app.get("/", (req, res) => {
  // mengirimkan response berupa teks
  res.send("Selamat datang di halaman utama!");
});

// route untuk halaman "tentang kami" (get request ke '/about')
app.get("/api/products", (req, res) => {
  // mengirimkan response berupa JSON
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
  ]);
});

// menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
