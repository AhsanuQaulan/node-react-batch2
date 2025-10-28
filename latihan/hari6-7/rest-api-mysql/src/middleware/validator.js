const { body, validationResult } = require("express-validator");

const movieValidationRules = () => {
  return [
    body("title").notEmpty().withMessage("Judul tidak boleh kosong").isLength({ min: 3 }).withMessage("Judul minimal 3 karakter"),

    body("year").notEmpty().withMessage("Tahun tidak boleh kosong").isInt().withMessage("Tahun harus berupa angka"),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  movieValidationRules,
  validate,
};
