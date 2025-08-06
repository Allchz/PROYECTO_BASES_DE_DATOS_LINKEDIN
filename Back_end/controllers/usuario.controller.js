const Usuario = require('../models/usuario.model');

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.obtenerUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.crearUsuario = async (req, res) => {
  const { nombre, correo, contrasena } = req.body;
  try {
    await Usuario.crearUsuario({ nombre, correo, contrasena });
    res.status(201).json({ mensaje: 'Usuario creado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
