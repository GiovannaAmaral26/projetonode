const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

router.get("/", usuarioController.listarTodos);
router.get("/:id", usuarioController.listarPorId);
router.post("/", usuarioController.criar);
router.put("/:id", usuarioController.atualizar);
router.delete("/:id", usuarioController.deletar);

module.exports = router;
