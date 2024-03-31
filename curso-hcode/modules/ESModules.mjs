import { EventEmitter } from "events";

class Evento extends EventEmitter {}
const meuEvento = new Evento();

meuEvento.on("segurança", (x, y) => {
  console.log(`Executando o evento de segurança: ${x} ${y}`);
});

meuEvento.emit("segurança", "userAdmin", "Alterou Salário");
