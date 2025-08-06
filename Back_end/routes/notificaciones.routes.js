const express = require('express');
const router = express.Router();
const notificacionesController = require('../controllers/notificacionesController');

router.get('/:id_usuario', notificacionesController.obtenerNotificaciones);
router.post('/', notificacionesController.crearNotificacion);

module.exports = router;
