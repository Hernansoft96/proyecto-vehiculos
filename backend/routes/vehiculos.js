const express = require("express");
const router = express.Router();

const Vehiculo = require("../models/Vehiculo");

// CREAR vehículo
router.post("/", async (req, res) => {
  const nuevoVehiculo = new Vehiculo(req.body);
  await nuevoVehiculo.save();
  res.json(nuevoVehiculo);
});

// OBTENER todos
router.get("/", async (req, res) => {
  const vehiculos = await Vehiculo.find();
  res.json(vehiculos);
});

// ELIMINAR
router.delete("/:id", async (req, res) => {
  await Vehiculo.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Vehículo eliminado" });
});

// ACTUALIZAR vehículo
router.put("/:id", async (req, res) => {
  const vehiculoActualizado = await Vehiculo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(vehiculoActualizado);
});

module.exports = router;