const oracledb = require('oracledb');
const dbConfig = require('../Config/db');

exports.obtenerUsuarios = async () => {
  const conn = await db.getConnection();
  const result = await conn.execute('SELECT * FROM USUARIOS');
  await conn.close();
  return result.rows;
};

exports.crearUsuario = async (usuario) => {
  const conn = await db.getConnection();
  const result = await conn.execute(
    `INSERT INTO USUARIOS (ID_USUARIO, NOMBRE, CORREO, CONTRASENA)
     VALUES (USUARIOS_SEQ.NEXTVAL, :nombre, :correo, :contrasena)`,
    usuario,
    { autoCommit: true }
  );
  await conn.close();
  return result;
};
