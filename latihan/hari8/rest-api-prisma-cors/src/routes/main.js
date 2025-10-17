const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

// PERBAIKAN: Nama file diubah dari "validation" menjadi "validator"
const { movieValidationRules, validate } = require("../middleware/validation");

// READ
router.get("/", movieController.getMovies);
router.get("/:id", movieController.getMovie);

// CREATE
router.post("/", movieValidationRules(), validate, movieController.createMovie);

// UPDATE
router.put("/:id", movieValidationRules(), validate, movieController.updateMovie);

// DELETE
router.delete("/:id", movieController.deleteMovie);

module.exports = router;
