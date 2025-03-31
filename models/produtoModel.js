const connection = require("../views/config");

const Produto = {
    getAll: (callback) => {
        connection.query("SELECT * FROM produtos", callback);
    },

    getById: (id, callback) => {
        connection.query("SELECT * FROM produtos WHERE id = ?", [id], callback);
    },

    create: (produto, callback) => {
        const { nome, preco, estoque } = produto;
        connection.query(
            "INSERT INTO produtos (nome, preco, estoque) VALUES (?, ?, ?)",
            [nome, preco, estoque],
            callback
        );
    },

    update: (id, produto, callback) => {
        const { nome, preco, estoque } = produto;
        connection.query(
            "UPDATE produtos SET nome = ?, preco = ?, estoque = ? WHERE id = ?",
            [nome, preco, estoque, id],
            callback
        );
    },

    delete: (id, callback) => {
        connection.query("DELETE FROM produtos WHERE id = ?", [id], callback);
    }
};

module.exports = Produto;