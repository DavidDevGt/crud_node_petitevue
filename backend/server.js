const express = require("express");
const cors = require("cors");
const routes = require("./routes"); // Asegúrate de que la ruta es correcta

// Crear la aplicación de Express
const app = express();

// Usar CORS para permitir todas las solicitudes de origen cruzado
app.use(cors());

// Middleware para parsear el cuerpo de las peticiones como JSON
app.use(express.json());

// Middleware para usar las rutas
app.use("/", routes);

// Definir el puerto y arrancar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
