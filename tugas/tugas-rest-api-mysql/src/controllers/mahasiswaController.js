// controllers/mahasiswaController.js
const db = require("../config/db");

// --- Helper Function ---
// Fungsi untuk menentukan indeks nilai berdasarkan skor
const getIndeksNilai = (nilai) => {
  if (nilai >= 80) return "A";
  if (nilai >= 70) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
};

// --- Controller Functions ---

// [CREATE] Menambahkan data nilai baru
exports.createNilai = async (req, res) => {
  const { nama, mata_kuliah, nilai } = req.body;

  // 1. Validasi input
  if (!nama || !mata_kuliah || nilai === undefined) {
    return res.status(400).json({ message: "Nama, mata kuliah, dan nilai harus diisi" });
  }

  // 2. Validasi rentang nilai
  if (nilai < 0 || nilai > 100) {
    return res.status(400).json({ message: "data nilai salah" });
  }

  try {
    // 3. Menentukan indeks nilai
    const indeks_nilai = getIndeksNilai(nilai);

    // 4. Menyimpan ke database
    const query = "INSERT INTO nilai_mahasiswa (nama, mata_kuliah, nilai, indeks_nilai) VALUES (?, ?, ?, ?)";
    const [result] = await db.query(query, [nama, mata_kuliah, nilai, indeks_nilai]);

    res.status(201).json({
      message: "Data nilai berhasil ditambahkan",
      id: result.insertId,
      nama,
      mata_kuliah,
      nilai,
      indeks_nilai,
    });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan pada server", error: error.message });
  }
};

// [READ] Mengambil semua data nilai
exports.getAllNilai = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM nilai_mahasiswa");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan pada server", error: error.message });
  }
};

// [READ] Mengambil data nilai berdasarkan ID
exports.getNilaiById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query("SELECT * FROM nilai_mahasiswa WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Data tidak ditemukan" });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan pada server", error: error.message });
  }
};

// [UPDATE] Memperbarui data nilai berdasarkan ID
exports.updateNilai = async (req, res) => {
  const { id } = req.params;
  const { nama, mata_kuliah, nilai } = req.body;

  // Validasi input
  if (!nama || !mata_kuliah || nilai === undefined) {
    return res.status(400).json({ message: "Nama, mata kuliah, dan nilai harus diisi" });
  }
  if (nilai < 0 || nilai > 100) {
    return res.status(400).json({ message: "data nilai salah" });
  }

  try {
    const indeks_nilai = getIndeksNilai(nilai);
    const query = "UPDATE nilai_mahasiswa SET nama = ?, mata_kuliah = ?, nilai = ?, indeks_nilai = ? WHERE id = ?";
    const [result] = await db.query(query, [nama, mata_kuliah, nilai, indeks_nilai, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Data tidak ditemukan" });
    }

    res.status(200).json({ message: "Data nilai berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan pada server", error: error.message });
  }
};

// [DELETE] Menghapus data nilai berdasarkan ID
exports.deleteNilai = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query("DELETE FROM nilai_mahasiswa WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Data tidak ditemukan" });
    }
    res.status(200).json({ message: "Data nilai berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan pada server", error: error.message });
  }
};
