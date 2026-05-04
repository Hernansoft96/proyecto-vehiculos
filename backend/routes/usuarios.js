const express = require("express");
const router = express.Router();

const Usuario = require("../models/Usuario");

// REGISTRO
router.post("/register", async (req, res) => {
  const nuevoUsuario = new Usuario(req.body);
  await nuevoUsuario.save();
  res.json({ mensaje: "Usuario registrado" });
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const usuario = await Usuario.findOne({ email, password });

  if (!usuario) {
    return res.json({ mensaje: "Credenciales incorrectas" });
  }

  res.json({ mensaje: "Login exitoso" });
});

module.exports = router;