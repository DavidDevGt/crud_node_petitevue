const express = require('express');
const routes = require('./routes');

// Crear app
const app = express();

// Middleware para usar JSON
app.use(express.json());

// Middleware para usar las rutas
app.use('/', routes());

// Definir puerto y arrancar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});