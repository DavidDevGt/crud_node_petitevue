const express = require('express');
const registroController = require('../controllers/registrosController');

// Crear router
const router = express.Router();

// Definir rutas
router.get('/api/registros', registroController.listarRegistros);
router.post('/api/registros', registroController.crearRegistro);
router.put('/api/registros/:id', registroController.actualizarRegistro);
router.delete('/api/registros/:id', registroController.eliminarRegistro);

module.exports = router;