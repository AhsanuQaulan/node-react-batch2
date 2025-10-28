const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

const { movieValidationRules, validate } = require("../middleware/validator");

router.get("/", movieController.getMovies);
router.get("/:id", movieController.getMovie);
router.post("/", movieValidationRules(), validate, movieController.createMovie);
router.put("/:id", movieValidationRules(), validate, movieController.updateMovie);
router.delete("/:id", movieController.deleteMovie);

module.exports = router;
