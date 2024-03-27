const EventEmitter = require("events");

//usando herança do OOP
//Agora todos os métodos publicos do EventEmitter temos dentro do Evento
class Evento extends EventEmitter {}
const meuEvento = new Evento();

//on criamos um evento
meuEvento.on("segurança", (x, y) => {
  console.log(`Executando o evento de segurança: ${x} ${y}`);
});

//estamos chamando o evento
meuEvento.emit("segurança", "userAdmin", "Alterou Salário");
