console.log("----------------------------");
console.log("Executando o arquivo sub.js");
console.log(`process: ${process.cwd()}`);
console.log(`Dirname: ${__dirname}`);
// o process.js que chamou, então o cwd traz quem chamou ele (process.js)
// enquanto o dirname fala onde tá o arquivo
