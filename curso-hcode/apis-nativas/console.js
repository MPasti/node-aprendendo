const dados = { name: "Glaucio", empresa: "Hcode" };

console.table(dados);

console.count("processo");
console.count("processo");
console.count("processo");
//alt shift seta pra baixo

console.countReset("processo");

console.time("contador");

//conta os segundos entre o começo e o end
console.timeEnd("contador");

console.assert(true, "faça alguma coisa");

//%s é uma string formatada, pega a mensagem que vem após
console.assert(false, "ih rapaz %s que pena!", "não funcionou");
//esse console verifica se rolou algo de errado

console.clear();
