//quando temos um erro, ele para a execução do código

function executeTo() {
  throw new Error(`Puts, deu erro! Na minha máquina funciona`);
}

function main() {
  //tentamos executar algo, caso dê erro, ele executa o catch imediatamente
  try {
    executeTo();
  } catch (error) {
    console.log("temos um erro!", error);
  }
}

//Com o try catch é uma forma de manipular o erro, nesse caso não para o código
main();
console.log("Ele roda mesmo depois do erro, continua executando");
//podemos dar um try catch em funções assíncronas
