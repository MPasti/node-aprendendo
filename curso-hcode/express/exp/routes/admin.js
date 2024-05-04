const express = require("express");
const router = express.Router();

router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send("Acessando a administração!");
});

router.get("/:id", (req, res) => {
  res.send("Acessando a administração, com o usuário: " + req.params.id);
});

//para dar update, nesse caso normalmente precisamos de uma função de middleware
//para consultar se existe, se está autorizado e autenticado
router.post("/:id", (req, res) => {
  res.send("Alterando o usuário: " + req.params.id);
});

module.exports = router;
