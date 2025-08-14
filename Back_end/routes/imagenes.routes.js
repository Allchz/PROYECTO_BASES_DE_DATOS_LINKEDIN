const express = require('express');
const multer = require('multer');
const path = require('path');
const { subirImagen, obtenerImagen } = require('../controllers/imagenes.controller');

const router = express.Router();
const upload = multer({ dest: path.join(__dirname, '..', 'uploads') });

router.post('/usuarios/:id_usuario/imagen/:tipo', upload.single('imagen'), subirImagen);
router.get('/usuarios/:id_usuario/imagen/:tipo', obtenerImagen);

module.exports = router;
