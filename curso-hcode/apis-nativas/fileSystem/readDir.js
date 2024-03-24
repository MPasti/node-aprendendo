const fs = require("fs");

//ler um diretório e chamar um callback
//readdirSync é bloqueante
fs.readdir("../", (err, data) => {
  if (err) throw err;

  //ele nos retorna um array de vários arquivos, então podemos dar um forEach
  // ele vai mostrar todos os arquivos
  data.forEach((files) => {
    console.log(__dirname + files);
  });
});
