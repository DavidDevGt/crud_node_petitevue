// Conectas con la bbdd
const db = require("../database");

// Controlador para leer todos los registros
exports.listarRegistros = (req, res) => {
  db.query("SELECT * FROM registros", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Controlador para crear un registro
exports.crearRegistro = (req, res) => {
  const nuevoRegistro = req.body;
  db.query("INSERT INTO registros SET ?", nuevoRegistro, (err, result) => {
    if (err) throw err;
    res.status(201).json({ mensaje: "Registro creado.", id: result.insertId });
  });
};

// Controlador para actualizar un registro
exports.actualizarRegistro = (req, res) => {
  const id = req.params.id;
  const actualizarRegistro = req.body;
  db.query(
    "UPDATE registros SET ? WHERE id = ?",
    [actualizarRegistro, id],
    (err, result) => {
      if (err) throw err;
      res.json({ mensaje: "Registro actualizado." });
    }
  );
};

// Controlador para eliminar un registro
exports.eliminarRegistro = (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM registros WHERE id = ?", id, (err, result) => {
    if (err) throw err;
    res.json({ mensaje: "Registro eliminado." });
  });
};
