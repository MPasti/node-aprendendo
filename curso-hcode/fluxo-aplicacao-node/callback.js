//callbacks são funções de retorno para quando um processo assíncrono acontece

//ela evita os erros quando há demoras na requisição

function soma(x, callback) {
  return setTimeout(() => {
    return callback(null, x + 5000);
  }, 3000);
}

function resolveSoma(err, result) {
  if (err) throw err;
  console.log(result);
}

soma(200, resolveSoma);
