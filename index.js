const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware para manejar datos JSON

// Ruta POST para recibir datos
app.post('/rev', (req, res) => {
  const data = req.body;  // Aquí recibes los datos POST
  console.log(data); // Muestra los datos recibidos
  res.status(200).send('Solicitud POST recibida');
});