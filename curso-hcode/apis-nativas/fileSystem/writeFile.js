const { writeFile } = require("fs");

writeFile("arquivo.txt", "Criando um arquivo txt com o writeFile!", (err) => {
  if (err) throw err;

  console.log("Arquivo criado com sucesso!");
});
