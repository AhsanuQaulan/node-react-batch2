const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 3002; // Port untuk backend, beda dari React

// Middleware
app.use(cors());
app.use(express.json());

// Konfigurasi koneksi ke Database MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Ganti dengan username MySQL Anda
  password: "root", // Ganti dengan password MySQL Anda (biasanya kosong)
  database: "db_react_crud", // Pastikan nama database sama
});

// Sambungkan ke Database
db.connect((err) => {
  if (err) {
    console.error("!!! KONEKSI DATABASE GAGAL !!!:", err);
    return;
  }
  console.log(">>> Berhasil terhubung ke database MySQL.");
});

// === API ENDPOINTS ===

// READ (GET all users)
app.get("/api/users", (req, res) => {
  const sql = "SELECT * FROM users ORDER BY id DESC";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// CREATE (POST a new user)
app.post("/api/users", (req, res) => {
  const { name, email } = req.body;
  const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
  db.query(sql, [name, email], (err, result) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        return res.status(409).json({ error: "Email sudah terdaftar." });
      }
      return res.status(500).json({ error: err.message });
    }
    // Kirim kembali data user yang baru dibuat
    res.status(201).json({ id: result.insertId, name, email });
  });
});

// UPDATE (PUT a user by ID)
app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const sql = "UPDATE users SET name = ?, email = ? WHERE id = ?";
  db.query(sql, [name, email, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "User updated" });
  });
});

// DELETE (DELETE a user by ID)
app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM users WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(204).send();
  });
});

// Jalankan server
app.listen(port, () => {
  console.log(`>>> Server backend berjalan di http://localhost:${port}`);
});
