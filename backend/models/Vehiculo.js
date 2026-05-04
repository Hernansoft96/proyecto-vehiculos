const mongoose = require("mongoose");

const VehiculoSchema = new mongoose.Schema({
  placa: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  fecha: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Vehiculo", VehiculoSchema);