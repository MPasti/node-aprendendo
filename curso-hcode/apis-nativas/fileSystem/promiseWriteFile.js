const { writeFile } = require("fs");

function criandoArquivo(name, content) {
  return new Promise((resolve, reject) => {
    writeFile(name, content, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

criandoArquivo("promiseArquivo.txt", "criando um arquivo usando promises")
  .then(() => console.log("arquivo gerado com sucesso!"))
  .catch((err) => console.log("erro!", err));
