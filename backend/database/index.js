// Usar mysql
const mysql = require('mysql');

// Crear la conexión a la bbdd
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_app_v1',
});

// Conectar a la bbdd
connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la bbdd.');
});

// Exportar la conexión para usarla en otros archivos
module.exports = connection;