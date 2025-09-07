const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();



const usuario = require('./routes/usuario');
const programa = require('./routes/programa');
const docente = require('./routes/docente');
const estudiante = require('./routes/estudiante');
const ofertaPractica = require('./routes/ofertaPractica');
const practica = require('./routes/practica');





const app = express();
app.use(bodyParser.json());
app.use(cors());
//app.use('api/ofertas-practicas',ofertaPractica);


app.use(bodyParser.json());

app.use('/api/usuarios', usuario);
app.use('/api/programas', programa);
app.use('/api/docentes', docente);
app.use('/api/estudiantes', estudiante);
app.use('/api/ofertas-practicas', ofertaPractica);
app.use('/api/practicas', practica);

app.get('/', (req, res) => {
  res.json({ message: 'API de gestión de prácticas funcionando correctamente' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`El servicio está corriendo en el puerto ${PORT}`);
});
// PARA EJECUTAR EL PROYECTO EN CONSOLA: 
//node server.js
// http://localhost:3000/api/curso
//http://localhost:3000/api/curso/?id=101