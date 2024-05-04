const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send(
    `Criando novo usuário via POST!\n Login: ${req.body.login}\nSenha: ${req.body.senha}`
  );
});

function logReq(req, res, next) {
  console.log("executando middleware para rota de usuários");
  next();
}

router.get("/", logReq, (req, res) => {
  res.send("listando usuários");
});

module.exports = router;
