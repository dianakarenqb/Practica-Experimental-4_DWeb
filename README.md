# Práctica Experimental 4 - Desarrollo Web
 Tema: Lenguaje del lado del servidor (Back-End con Node.js y PostgreSQL)

# 🚖 API REST Cooperativa FEDOTAXI

API desarrollada con Node.js, Express y PostgreSQL para registrar y listar usuarios.

## 🚀 Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/dianakarenqb/Practica-Experimental-4_DWeb.git
   cd taxis-coop-api

2. Instalar dependencias necesarias con npm install
   ```bash
   npm install express cors pg

3. Configurar base de datos PostgreSQL
   ```bash
   CREATE DATABASE usuarios_db;

   CREATE TABLE usuarios (
     id SERIAL PRIMARY KEY,
     nombre VARCHAR(50),
     correo VARCHAR(100),
     contraseña VARCHAR(100)
   );

4. Crear archivo .env con credenciales
   ```bash
   PGHOST=localhost
   PGUSER=postgres
   PGPASSWORD=contraseña
   PGDATABASE=usuarios_db
   PGPORT=5432

5. Ejecuta el servidor
   ```bash
   node server.js

6. Probar los endpoints

- GET http://localhost:3000/
- POST http://localhost:3000/usuarios
- GET http://localhost:3000/usuarios

# 📦 Tecnologías usadas

- Node.js
- Express
- PostgreSQL
- dotenv
- cors

# 💡 Autor
Diana Karen Quintana Barreto
