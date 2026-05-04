# Proyecto Final - Sistema de Gestión de Vehículos

## 📌 Descripción
Aplicación web con arquitectura desacoplada (Frontend + Backend).
Permite gestionar vehículos y autenticar usuarios.

---

## ⚙️ Tecnologías
- Frontend: HTML5, CSS3, JavaScript (DOM)
- Backend: Node.js, Express
- Base de datos: MongoDB (Mongoose)
- Pruebas: Postman

---

## 📁 Estructura

proyecto-vehiculos/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── index.html
    ├── styles.css
    └── app.js

---

## ▶️ Ejecución Backend

1. Abrir terminal en /backend
2. Instalar dependencias:
   npm install
3. Ejecutar servidor:
   node server.js

Servidor:
http://localhost:3000

---

## 🔗 Endpoints

### Usuarios
- POST /usuarios/register
- POST /usuarios/login

### Vehículos
- GET /vehiculos
- POST /vehiculos
- PUT /vehiculos/:id
- DELETE /vehiculos/:id

---

## 🧪 Pruebas en Postman

Se validaron los siguientes casos:

✔ Registro de usuario  
✔ Login exitoso / fallido  
✔ Crear vehículo  
✔ Listar vehículos  
✔ Actualizar vehículo  
✔ Eliminar vehículo  

---

## 📥 Ejemplo JSON

### Crear vehículo
{
  "placa": "ABC123",
  "tipo": "Cambio de aceite",
  "fecha": "2026-05-01"
}

### Login
{
  "email": "test@gmail.com",
  "password": "123456"
}

---

## 🖥️ Frontend

- SPA (Single Page Application)
- Navegación mediante manipulación del DOM
- Validación de formularios
- Simulación de flujo: Login → Dashboard → Vehículos

---

## 🧠 Conclusión

Se desarrolló una aplicación completa con separación de responsabilidades,
implementando una API REST funcional y una interfaz interactiva.
