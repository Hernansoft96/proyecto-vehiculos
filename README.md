# Proyecto Final - Sistema de Gestión de Vehículos

##  Descripción del proyecto
Aplicación web con arquitectura desacoplada (Frontend + Backend).
Permite gestionar vehículos y autenticar usuarios.

---

##  Tecnologías que se usaron
- Frontend: HTML5, CSS3, JavaScript (DOM)
- Backend: Node.js, Express
- Base de datos: MongoDB (Mongoose)
- Pruebas: Postman

---

## Estructura

proyecto-vehiculos/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── frontend/
│    ├── index.html
│    ├── styles.css
│    └── app.js
│
└──evidencias postamn

---

##  Ejecución Backend

1. Abrir terminal en /backend
2. Instalar dependencias:
   npm install
3. Ejecutar servidor:
   node server.js

Servidor:
http://localhost:3000 "por defecto"

---

##  Endpoints

### Usuarios
- POST /usuarios/register
- POST /usuarios/login

### Vehículos
- GET /vehiculos
- POST /vehiculos
- PUT /vehiculos/:id
- DELETE /vehiculos/:id

---

##  Pruebas que se realizaron en Postman

Se valido lo siguiente:

✔ Registro de usuario  
✔ Login exitoso / fallido  
✔ Crear vehículo  
✔ Listar vehículos  
✔ Actualizar vehículo  
✔ Eliminar vehículo  

---

##  Ejemplo JSON

### Crear vehículo
{
  "placa": "KSP058",
  "tipo": "Cambio de bombillos",
  "fecha": "2026-04-21"
}

### Login
{
  "email": "prueba321@mail.com",
  "password": "1234"
}

---

##  Frontend

- SPA (Single Page Application)
- Navegación mediante manipulación del DOM
- Validación de formularios
- Simulación de flujo: Login → Dashboard → Vehículos

---

##  Conclusión de desarrollo

Se desarrolló una aplicación completa con separación de responsabilidades,
implementando una API REST funcional y una interfaz interactiva.

---

##  Autor
Hernan Loaiza
