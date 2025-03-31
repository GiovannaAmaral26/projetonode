const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const produtoRoutes = require("./routes/produtoRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/produtos", produtoRoutes);

// Definição da rota para o caminho raiz
app.get("/", (req, res) => {
    res.send("Página inicial");
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
