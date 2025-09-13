// Importamos express
const express = require("express");
const app = express();
const port = 3000;

// Ruta raíz (http://localhost:3000/)
app.get("/", (req, res) => {
  res.send("¡Bienvenido a mi primer servidor con Express!");
});

// Ruta dinámica con parámetro (http://localhost:3000/saludo/TuNombre)
app.get("/saludo/:nombre", (req, res) => {
  const nombre = req.params.nombre; // Captura el valor de la URL
  res.send(`Hola, ${nombre}! Encantado de saludarte 🚀`);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
