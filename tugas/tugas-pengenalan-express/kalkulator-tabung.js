// Import library express
const express = require("express");

// Buat instance aplikasi express
const app = express();
const PORT = 3000;

// Buat route GET sesuai permintaan soal
// :jariJari dan :tinggi adalah parameter dinamis dari URL
app.get("/lingkaran-tabung/:jariJari/:tinggi", (req, res) => {
  // 1. Ambil nilai dari parameter URL
  // parseFloat untuk mengubah string menjadi angka (bisa desimal)
  const jariJari = parseFloat(req.params.jariJari);
  const tinggi = parseFloat(req.params.tinggi);

  // 2. Buat fungsi-fungsi perhitungan
  const luasLingkaran = (r) => Math.PI * r ** 2;
  const kelilingLingkaran = (r) => 2 * Math.PI * r;
  const volumeTabung = (r, t) => luasLingkaran(r) * t;

  // 3. Lakukan perhitungan
  const luasAlas = luasLingkaran(jariJari);
  const kelilingAlas = kelilingLingkaran(jariJari);
  const volume = volumeTabung(jariJari, tinggi);

  // 4. Buat teks output dan kirim sebagai response
  // .toFixed(2) untuk membulatkan hasil menjadi 2 angka desimal
  const outputText = `jariJari : ${jariJari}, tinggi: ${tinggi}, volume tabung : ${volume.toFixed(2)}, luas alas tabung : ${luasAlas.toFixed(2)}, keliling alas tabung : ${kelilingAlas.toFixed(2)}`;

  res.send(outputText);
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
  console.log(`Coba akses: http://localhost:${PORT}/lingkaran-tabung/7/10`);
});
