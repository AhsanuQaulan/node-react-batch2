// routes/mahasiswaRoutes.js
const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/mahasiswaController");

// Definisikan rute untuk setiap operasi CRUD
router.post("/", mahasiswaController.createNilai); // CREATE
router.get("/", mahasiswaController.getAllNilai); // READ All
router.get("/:id", mahasiswaController.getNilaiById); // READ One
router.put("/:id", mahasiswaController.updateNilai); // UPDATE
router.delete("/:id", mahasiswaController.deleteNilai); // DELETE

module.exports = router;
