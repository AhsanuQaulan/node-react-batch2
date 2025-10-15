const movieModel = require("../models/movieModels");

const getMovies = async (req, res) => {
  try {
    const movies = await movieModel.getAllMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};

const getMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movieModel.getMovieById(id);
    if (movie) {
      res.status(200).json(movie);
    } else {
      res.status(404).json({ message: "Film tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};

const createMovie = async (req, res) => {
  try {
    const newMovie = await movieModel.createMovie(req.body);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const success = await movieModel.updateMovie(id, req.body);
    if (success) {
      res.status(200).json({ message: "Film berhasil diperbarui" });
    } else {
      res.status(404).json({ message: "Film tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const success = await movieModel.deleteMovie(id);
    if (success) {
      res.status(200).json({ message: "Film berhasil dihapus" });
    } else {
      res.status(404).json({ message: "Film tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};

module.exports = {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
