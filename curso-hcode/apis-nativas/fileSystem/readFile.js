const fs = require("fs");

fs.readFile(__dirname + "/texto.txt", (err, data) => {
  if (err) throw err;

  //ele nos lê em buffer e nos retorna um hexadecimal
  console.log(data.toString());
});

const texto = fs.readFileSync(__dirname + "/texto.txt");

//bloqueante
//aparece antes pq ele bloqueia o outro de ser executado para ser terminado antes
console.log("------------------------------------------");
console.log(`texto: ${texto}`);
