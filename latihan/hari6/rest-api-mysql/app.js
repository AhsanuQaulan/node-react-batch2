const express = require("express");
const app = express();
const PORT = 3000;

const movieRoutes = require("./src/routes/movieRoutes");

app.use(express.json());
app.use("/movies", movieRoutes);
app.get("/", (req, res) => {
  res.send("Selamat datang di Movie API!");
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
