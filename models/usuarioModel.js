const connection = require("../views/config");

const Usuario = {
    getAll: (callback) => {
        connection.query("SELECT * FROM usuarios", callback);
    },

    getById: (id, callback) => {
        connection.query("SELECT * FROM usuarios WHERE id = ?", [id], callback);
    },

    create: (usuario, callback) => {
        const { nome, email, senha } = usuario;
        connection.query(
            "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
            [nome, email, senha],
            callback
        );
    },

    update: (id, usuario, callback) => {
        const { nome, email, senha } = usuario;
        connection.query(
            "UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?",
            [nome, email, senha, id],
            callback
        );
    },

    delete: (id, callback) => {
        connection.query("DELETE FROM usuarios WHERE id = ?", [id], callback);
    }
};

module.exports = Usuario;
