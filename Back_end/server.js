const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Configuración de conexión
const dbConfig = {
  user: 'TU_USUARIO',
  password: 'TU_CONTRASEÑA',
  connectString: 'localhost/XEPDB1' // Cambia según tu config
};

// Ruta de prueba para obtener usuarios
app.get('/api/usuarios', async (req, res) => {
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT * FROM USUARIOS', [], {
      outFormat: oracledb.OUT_FORMAT_OBJECT
    });
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al conectar con Oracle DB');
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
