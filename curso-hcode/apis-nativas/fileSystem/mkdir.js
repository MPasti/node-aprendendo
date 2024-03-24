const fs = require("fs");
const assets = ["css", "js", "images", "fonts", "lib"];

function make(dir) {
  //passando o recursive como true, ele permite criar subpastas
  dir.forEach((item) => {
    fs.mkdir(`projeto/assets/${item}`, { recursive: true }, (err) => {
      if (err) throw err;

      console.log("diretório criado com sucesso! ", item);
    });
  });
}

make(assets);

// fs.mkdir("projeto", { recursive: true }, (err) => {
//     if (err) throw err;

//     console.log("diretório criado");
//   });
