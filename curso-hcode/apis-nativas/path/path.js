const path = require("path");

//para trazer o nome do arquivo
console.log(path.basename("c:\\temp\\arquivo.html"));
console.log("normalize", path.normalize("c:\\temp/dir//subdir/dir/.."));
console.log(
  "join path: ",
  path.join("/teste/", "teste2", "teste3/teste4", "dir2", "..")
);

//trouxe o caminho absoluto até esse arquivo
console.log("resolve", path.resolve("path.js"));
console.log("extension", path.extname("path.js"));

//esse módulo serve para manipular caminhos
