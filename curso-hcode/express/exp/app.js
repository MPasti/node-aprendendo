const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/usuario");
const cookieParser = require("cookie-parser");

//para o express servir os arquivos estaticos que estão no public
app.use("/static", express.static("public"));
//para podermos ter acesso as funções de cookie
//modulo de terceiros para manipulação de cookies
app.use(cookieParser());

app.get("setcookie", (req, res) => {
  res.cookie("user", "Mathias", { maxAge: 900000, httpOnly: true });
  return res.send("Cookie gravado com sucesso!");
});

app.get("getcookie", (req, res) => {
  let user = req.cookies["user"];
  if (user) return res.send(user);
});

//quando entrar na url padrão, sem nada dps da barra e vai capturar
app.get("/", (req, res) => {
  res.statusCode = 200;
  res.send("Vai Corinthians!");
});

//uma função de middleware, de built-in
// esse em específico está lendo e podendo gerar um arquivo em json
app.use(express.json());

app.use((req, res, next) => {
  console.log("executando Middleware em nível de aplicação");
  //já executamos o que é preciso, segue o fluxo
  return next();
});

app.use("/admin", adminRoutes);

app.use("/user", userRoutes);

app.get("*", (req, res, next) => {
  setImmediate(() => {
    next(new Error("temos um erro!"));
  });
});

//função para tratar erro deve ficar depois de todos
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ message: err.message });
});

app.listen(3000, () => {
  console.log("server running at: http://localhost:3000");
});
