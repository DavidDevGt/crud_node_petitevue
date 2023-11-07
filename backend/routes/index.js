const express = require('express');
const registroController = require('../controllers/registroController');

// Crear router
const router = express.Router();

// Definir rutas
router.get('/registros', registroController.listarRegistros);
router.post('/registros', registroController.crearRegistro);
router.put('/registros/:id', registroController.actualizarRegistro);
router.delete('/registros/:id', registroController.eliminarRegistro);

module.exports = router;