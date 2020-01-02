const express = require("express");
const router = express.Router();
// Colocar o controller que ainda não foi criado
const smartphone_controller = require("../controllers/smartphone.controller");
// Teste simples
router.get("/testar", smartphone_controller.test);
//Create SmartPhones
router.post("/create", smartphone_controller.create);

// Busca registro
router.get("/:id", smartphone_controller.details);

module.exports = router;

