const oracledb = require('oracledb');
const dbConfig = require('../config/database');

async function obtenerNotificacionesPorUsuario(id_usuario) {
  let conn;
  try {
    conn = await oracledb.getConnection(dbConfig);
    const result = await conn.execute(
      `SELECT * FROM TBL_Notificacion WHERE id_usuario = :id_usuario ORDER BY fecha DESC`,
      [id_usuario]
    );
    return result.rows;
  } finally {
    if (conn) await conn.close();
  }
}

async function crearNotificacion(data) {
  let conn;
  try {
    conn = await oracledb.getConnection(dbConfig);
    await conn.execute(
      `INSERT INTO TBL_Notificacion (id_notificacion, id_usuario, mensaje, fecha)
       VALUES (TBL_Notificacion_seq.NEXTVAL, :id_usuario, :mensaje, SYSDATE)`,
      {
        id_usuario: data.id_usuario,
        mensaje: data.mensaje
      },
      { autoCommit: true }
    );
    return { mensaje: 'Notificación creada exitosamente' };
  } finally {
    if (conn) await conn.close();
  }
}

module.exports = {
  obtenerNotificacionesPorUsuario,
  crearNotificacion
};
