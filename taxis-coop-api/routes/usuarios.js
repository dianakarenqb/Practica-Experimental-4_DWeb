
import express from "express";
import pool from "../db.js";

const router = express.Router();

// Registrar usuario
router.post("/", async (req, res) => {
  const { nombre, correo, contraseña } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO usuarios (nombre, correo, contraseña) VALUES ($1, $2, $3) RETURNING *",
      [nombre, correo, contraseña]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar usuario" });
  }
});

// Listar todos los usuarios
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM usuarios");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

export default router;
