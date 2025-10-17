const express = require("express");
require("dotenv").config();

// 1. Impor paket cors
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

const movieRoutes = require("./src/routes/movieRoutes");

// --- MIDDLEWARE ---
// 2. Gunakan CORS sebagai middleware global
// Ini akan mengizinkan SEMUA permintaan dari origin mana pun
app.use(cors());

// Middleware untuk membaca body request sebagai JSON
app.use(express.json());

// --- ROUTES ---
// 3. Pasang router Anda SETELAH middleware cors
app.use("/movies", movieRoutes); // Sesuaikan path

app.get("/", (req, res) => {
  res.send("Selamat datang di API yang sudah mendukung CORS!");
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
