//o módulo require, ele seque um padrão chamado command js, ou seja, ele chama um módulo nativo
//dentro de outro arquivo
const http = require("http");
const host = "127.0.0.1";
const port = 3000;

// estou criando um server web, pedindo para o módulo http criar um servidor
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Olá mundo!\nMeu primeiro Script!");
  // deu certo e vai nos retornar no conteúdo um texto
});

//aqui falamos para quando conectarem no servidor, executar a função seguinte
server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
