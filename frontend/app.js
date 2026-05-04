function mostrarVista(vista) {
  document.getElementById("login").classList.add("hidden");
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("vehiculos").classList.add("hidden");

  document.getElementById(vista).classList.remove("hidden");
}

// LOGIN SIMULADO
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Campos obligatorios");
    return;
  }

  if (!email.includes("@")) {
    alert("Correo inválido");
    return;
  }

  mostrarVista("dashboard");
}

// VEHICULOS
let vehiculos = [];

function agregarVehiculo() {
  const placa = document.getElementById("placa").value;
  const tipo = document.getElementById("tipo").value;
  const fecha = document.getElementById("fecha").value;

  if (!placa || !tipo || !fecha) {
    alert("Todos los campos son obligatorios");
    return;
  }

  vehiculos.push({ placa, tipo, fecha });
  render();
}

function render() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  vehiculos.forEach((v, i) => {
    lista.innerHTML += `
      <li>${v.placa} - ${v.tipo} - ${v.fecha}
      <button onclick="eliminar(${i})">Eliminar</button></li>
    `;
  });
}

function eliminar(i) {
  vehiculos.splice(i, 1);
  render();
}