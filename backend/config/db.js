const mysql = require('mysql2');
require('dotenv').config(); // Cargar las variables de entorno 

// Usar las variables de entorno para la conexión con la base de datos  
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Database connected!');
});

module.exports = connection;
