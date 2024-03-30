const { EventEmitter } = require("events");
const emitter = new EventEmitter();

const validaObjeto = (a) => {
  if (typeof a !== "object") {
    emitter.emit("error", new Error("tipo inválido"));
  }
  console.log("objeto valido");
};

emitter.addListener("error", (err) => {
  console.log("Evento: ", err.message);
});

let dados = { nome: "matheus", sobrenome: "pasti" };

validaObjeto(dados);
