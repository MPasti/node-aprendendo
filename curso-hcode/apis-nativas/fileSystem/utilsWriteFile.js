//utilizando promises => promisify cria promises
const { promisify } = require("util");

//para trazer ele como promise
const writeFile = promisify(require("fs").writeFile);
const conteudo = "criando um arquivo usando o promisify";

writeFile("utilArquivo.txt", conteudo)
  .then(() => {
    console.log("criado com sucesso!");
  })
  .catch((err) => {
    console.log(`erro! ${err}`);
  });
