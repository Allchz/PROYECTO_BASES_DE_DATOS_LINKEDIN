// app.js

const express = require('express');
const oracledb = require('oracledb');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Servidor backend conectado y funcionando!');
});

// Ruta de prueba con Oracle (opcional)
app.get('/oracle', async (req, res) => {
  let connection;

  try {
    connection = await oracledb.getConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECT
    });

    const result = await connection.execute('SELECT * FROM DUAL');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al conectar a Oracle' });
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

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
