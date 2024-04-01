const crypto = require("crypto");
const start = Date.now();

function logHashTime() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log(`hash foi procesado em ${Date.now() - start}`);
  });
}

logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();

//2119
//2178
// o que aconteceu? não usamos o Sync pq é pesado e é assincrono
// nesse caso a partir da libuv ele vai ver que é muito pesado para executar rapido
// ele vai chamar o Thread Pool e vai dividir para um e rodar ao mesmo tempo quase
// caso fosse 5 ia demorar mais, pois o thread pool são 4, quando liberar entra o 5°
