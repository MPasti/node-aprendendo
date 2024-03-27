//trabalhamos com eventos no front-end -> setTimeout -> onClick e afins
//temos esse modulo nativo para dispararmos eventos personalizados
//quantos temos um script de longa duração, que faz várias coisas, ou que encerra processo
//precisamos disparar eventos para controlar o fluxo de execução desse script
//"já processei tal coisa, o que devo fazer?"

const { eventEmitter } = require("events");

class Evento extends eventEmitter {}
const meuEvento = new Evento();

//estamos herdando essa classe evento, temos On e EMIT

//isso é um subscriber (assinante)
meuEvento.on("segurança", (x, y) => {
  console.log(`Executando o evento de segurança ${x} ${y}`);
});

//temos o publisher (emissor)
meuEvento.emit("segurança", "userAdming", "Alterou salário");

meuEvento.on("encerrar", (dados) => {
  console.log(`Assinante: ${dados}`);
});

meuEvento.emit("encerrar", "Encerrando a execução de importação!");

//o script fica escutando esses eventos, se ocorrer, ele recebe uma informação e executa
// é o subscriber que vai reagir executando uma rotina que colocamos, reage a fluxos de evento
