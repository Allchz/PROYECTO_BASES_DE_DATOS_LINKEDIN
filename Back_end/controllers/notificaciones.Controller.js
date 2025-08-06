const Notificaciones = require('../models/notificaciones');

exports.obtenerNotificaciones = async (req, res) => {
  try {
    const notificaciones = await Notificaciones.obtenerNotificacionesPorUsuario(req.params.id_usuario);
    res.json(notificaciones);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al obtener notificaciones' });
  }
};

exports.crearNotificacion = async (req, res) => {
  try {
    const resultado = await Notificaciones.crearNotificacion(req.body);
    res.json(resultado);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al crear notificación' });
  }
};
