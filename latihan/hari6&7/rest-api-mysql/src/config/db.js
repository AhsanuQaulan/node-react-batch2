const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db_movie", // Pastikan nama database sudah benar
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

console.log("Mencoba terhubung ke database MySQL...");
pool
  .getConnection()
  .then((connection) => {
    console.log("Koneksi ke database berhasil!");
    connection.release();
  })
  .catch((err) => {
    console.error("Koneksi ke database GAGAL:", err.message);
  });

module.exports = pool;
