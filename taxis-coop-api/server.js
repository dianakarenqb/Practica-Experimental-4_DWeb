
import express from "express";
import cors from "cors";
import usuariosRouter from "./routes/usuarios.js";

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("🚖 API Cooperativa FEDOTAXI - REGISTRO DE TAXISTAS");
});

app.use("/usuarios", usuariosRouter);

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
