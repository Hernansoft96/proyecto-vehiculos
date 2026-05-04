const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const vehiculosRoutes = require("./routes/vehiculos");
const usuariosRoutes = require("./routes/usuarios");

const app = express();


app.use(cors());
app.use(express.json());

app.use("/usuarios", usuariosRoutes);
app.use("/vehiculos", vehiculosRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/vehiculos")
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Servidor funcionando 🚀");
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});