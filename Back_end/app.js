require('dotenv').config();
const express = require('express');
const oracledb = require('oracledb');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/usuarios', async (req, res) => {
  let connection;

  try {
    connection = await oracledb.getConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECT_STRING
    });

    const result = await connection.execute(
      'SELECT * FROM LI_Usuario', 
      [], 
      { outFormat: oracledb.OUT_FORMAT_OBJECT }
    );

    res.json(result.rows);

  } catch (err) {
    console.error('Error en consulta:', err);
    res.status(500).send('Error en la consulta a la base de datos');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (closeErr) {
        console.error('Error cerrando conexión:', closeErr);
      }
    }
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
