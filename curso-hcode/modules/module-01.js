console.log("Modulo 01 js");

//se fazemos uma const aqui, ele obriga a ficar só nesse escopo
//então fica privado para os módulos, se tirassemos o const ele viraria modulo

//teriamos que colocar no module.exports do final do arquivo para acessar tendo o const
const oculta = () => {
  console.log("executando função oculta");
};

executa = () => {
  console.log("Executando a função executa");
};
//module.exports.executa = ()=>{}

//Modulo REPL -> é um módulo interativo -> executamos o código em terminal
// só dando Node para entrar nisso
//require("./module-01")
//colocamos ./ para dizer que estamos incluindo um modulo que não é nativo

welcome = `Bem vindo`;

//toda vez que usamos o require para trazer um modulo externo
//o node vai interpretar, e vai guardar em cache, então ele não vai reinterpretar
// então não pega atualizações

//require("./module-01")
//const m01 = require("./module-01")
//m01.executa
// para ter acesso ao módulo temos que guardar em algum lugar

// atribuição por desestruturação
//const {welcome} = require("./module-01")
//console.log(welcome)

module.exports = { executa, welcome };
