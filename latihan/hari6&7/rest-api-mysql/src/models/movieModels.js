const pool = require("../config/db");

const getAllMovies = async () => {
  const [rows] = await pool.query("SELECT * FROM movies");
  return rows;
};

const getMovieById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM movies WHERE id = ?", [id]);
  return rows[0] || null;
};

const createMovie = async (movieData) => {
  const { title, year } = movieData;
  const [result] = await pool.query("INSERT INTO movies (title, year) VALUES (?, ?)", [title, year]);
  return { id: result.insertId, title, year };
};

const updateMovie = async (id, movieData) => {
  const { title, year } = movieData;
  const [result] = await pool.query("UPDATE movies SET title = ?, year = ? WHERE id = ?", [title, year, id]);
  return result.affectedRows > 0;
};

const deleteMovie = async (id) => {
  const [result] = await pool.query("DELETE FROM movies WHERE id = ?", [id]);
  return result.affectedRows > 0;
};

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
